from rest_framework import viewsets
from artgallery.models import Gallery
from artgallery.serializers import GallerySerializer


class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer