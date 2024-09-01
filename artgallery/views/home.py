from rest_framework import viewsets
from artgallery.models import Home
from artgallery.serializers import HomeSerializer


class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer

    