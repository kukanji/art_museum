from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views.user import UserViewSet, TopViewSet, HomeViewSet

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')
router.register(r'top', TopViewSet, basename='top')
router.register(r'home', HomeViewSet, basename='home')


urlpatterns = [
    path('', include(router.urls)),
]