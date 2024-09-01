from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('gallery/', include('gallery.urls')),
    path('artgallery/', include('artgallery.urls')),
    *static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT),
    *static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
    # path()はプログラムファイル,static()はCSS等の静的ファイルを呼び出す
    # staticはリスト型が返ってくるから"*"で展開する
]# settings内のmedia_urlが合致した際にdocument_rootで定義した画像を呼び出す
