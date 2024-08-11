from django.urls import path
from .views.images import top

urlpatterns = [
    path('', top, name='top'),
]