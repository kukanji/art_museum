import re
import logging
from django.conf import settings
from django.http import HttpResponse
from django.utils.deprecation import MiddlewareMixin
from pathlib import Path

# ログディレクトリの作成
log_dir = Path(settings.BASE_DIR) / 'logs'
log_dir.mkdir(exist_ok=True)

# ロガーの設定
req_handler = logging.FileHandler(log_dir / 'requests.log')
req_handler.setLevel(logging.INFO)

formatter = logging.Formatter('[%(asctime)s] %(message)s')
req_handler.setFormatter(formatter)

req_log = logging.getLogger('requests')
req_log.propagate = False
req_log.addHandler(req_handler)


class HeadersLoggingMiddleware(MiddlewareMixin):
    def __call__(self, request):
        response = self.get_response(request)
    
        # リクエストヘッダーの収集
        keys = sorted(filter(lambda k: k.startswith(('HTTP_', 'CONTENT_')), request.META))
        keys = ['REMOTE_ADDR'] + keys
        meta = '\n'.join(f"{k}={request.META[k]}" for k in keys)

        # レスポンスステータスの取得
        status = f"{response.status_code} {response.reason_phrase}"

        # レスポンスヘッダーの収集
        response_headers = [(str(k), str(v)) for k, v in response.headers.items()]
        headers = '\n'.join(f"{k}: {v}" for k, v in response_headers)

        # ログの記録
        req_log.error(
            f'"{request.method} {request.build_absolute_uri()}"\n'
            f'{meta}\n'
            f'{status}\n'
            f'{headers}'
        )

        return response