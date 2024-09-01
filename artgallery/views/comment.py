from rest_framework import viewsets
from artgallery.models import Comment
from artgallery.serializers import CommentSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer