from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.user import UserViewSet
from .views.top import TopViewSet
from .views.home import HomeViewSet
from .views.gallery import GalleryViewSet
from .views.art import ArtViewSet
from .views.comment import CommentViewSet

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'top', TopViewSet, basename='top')
router.register(r'home', HomeViewSet, basename='home')
router.register(r'gallery', GalleryViewSet, basename='gallery')
router.register(r'art', ArtViewSet, basename='art')
router.register(r'comment', CommentViewSet, basename='comment')

urlpatterns = [
    path('', include(router.urls)),
]