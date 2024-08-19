from django.urls import path, include
from rest_framework.routers import DefaultRouter

from artgallery import views

router = DefaultRouter()
#router.register(r'artgallery', views.ArtgalleryViewSet, basename='artgallery')

urlpatterns = [
    path('', include(router.urls)),
]