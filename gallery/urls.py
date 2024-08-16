from django.urls import path
from .views.images import top_page, artist_home, gallery

urlpatterns = [
    path('', top_page, name='top_page'),
    path('<str:username>/', artist_home, name='artist_home'),
    path('gallery/<str:username>/', gallery, name='gallery'),
]