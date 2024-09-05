from rest_framework import viewsets
from artgallery.models import Gallery
from artgallery.serializers import GallerySerializer


class GalleryViewSet(viewsets.ModelViewSet):
    serializer_class = GallerySerializer

    # get_querysetメソッドにオーバーライド
    def get_queryset(self):
        queryset = Gallery.objects.all()
        artist_id = self.request.query_params.get('artist_id', None)
        if artist_id is not None:
            queryset = queryset.filter(artist_id=artist_id)
        return queryset