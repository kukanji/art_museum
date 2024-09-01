from rest_framework import viewsets
from django.contrib.auth.models import User
from artgallery.serializers import UserSerializer


class TopViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    