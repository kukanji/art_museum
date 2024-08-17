from django.urls import path
from .views.images import top_page, artist_home, gallery, comment

urlpatterns = [
    path('', top_page, name='top_page'),
    path('<str:username>/', artist_home, name='artist_home'),
    path('<str:username>/<str:title>/', gallery, name='gallery'),
    path('<str:username>/<str:title>/<int:single_art_id>', comment, name='comment'),
]