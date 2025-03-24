from rest_framework import viewsets
from artgallery.models import Home
from artgallery.serializers import HomeSerializer


class HomeViewSet(viewsets.ModelViewSet):
    serializer_class = HomeSerializer

    def get_queryset(self):
        artist_id = self.request.query_params.get('artist_id', None)
        print("home_artist_id", artist_id)
        # import re
        # import logging
        # from django.conf import settings
        # from django.http import HttpResponse
        # from django.utils.deprecation import MiddlewareMixin
        # from pathlib import Path

        # # ログディレクトリの作成
        # log_dir = Path(settings.BASE_DIR) / 'logs'
        # log_dir.mkdir(exist_ok=True)

        # # ロガーの設定
        # req_handler = logging.FileHandler(log_dir / 'requests.log')
        # # req_handler.setLevel(logging.DEBUG)

        # # formatter = logging.Formatter('[%(asctime)s] %(message)s')
        # # req_handler.setFormatter(formatter)
        # req_log = logging.getLogger('requests')
        # req_log.propagate = False
        # req_log.addHandler(req_handler)
        # print('req_log', req_log)
        # req_log.error(
        #     artist_id
        # )
        if artist_id:
            return Home.objects.filter(artist_id=artist_id)
        return Home.objects.select_related('artist').all()