FROM python:3.11

USER root

RUN apt-get update && \
    apt-get -y install --reinstall ca-certificates && \
    apt-get -y install software-properties-common && \
    pip install --upgrade pip

# Install Basic Packages
# RUN pip install ipykernel jupyter

# 作業ディレクトリを作成
WORKDIR /workspace

# 依存関係をコピーしてインストール
COPY requirements.txt /workspace/
RUN pip install -r requirements.txt

# アプリケーションのコードをコピー
COPY . /workspace/

# デフォルトコマンド
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
