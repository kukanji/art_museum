from rest_framework import viewsets
from artgallery.models import Art
from artgallery.serializers import ArtSerializer


class ArtViewSet(viewsets.ModelViewSet):
    serializer_class = ArtSerializer

    def get_queryset(self):
        gallery_id = self.request.query_params.get('gallery_id', None)
        if gallery_id:
            return Art.objects.filter(gallery__id=gallery_id)
        else:
            return Art.objects.all()