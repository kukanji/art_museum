from rest_framework import viewsets
from artgallery.models import Home
from artgallery.serializers import HomeSerializer


class HomeViewSet(viewsets.ModelViewSet):
    serializer_class = HomeSerializer

    def get_queryset(self):
        artist_id = self.request.query_params.get('artist_id', None)
        print("home_artist_id", artist_id)
        if artist_id:
            return Home.objects.filter(artist_id=artist_id)
        return Home.objects.select_related('artist').all()