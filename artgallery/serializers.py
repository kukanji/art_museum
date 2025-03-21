from rest_framework import serializers
from .models import Home, Gallery, Art, Comment
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class HomeSerializer(serializers.ModelSerializer):
    artist = UserSerializer(read_only=True)

    class Meta:
        model = Home
        fields = ['id', 'artist', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at']


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'artist', 'title', 'description', 'created_at', 'updated_at']


class ArtSerializer(serializers.ModelSerializer):
    thumbnail = serializers.SerializerMethodField()

    def get_thumbnail(self, obj):
        if obj.thumbnail:
            return f'https://backend.artmuseum.y-kanji.com/{obj.thumbnail.url}'
        return None

    class Meta:
        model = Art
        fields = ['id', 'gallery', 'thumbnail', 'art', 'title', 'description', 'like_sum', 'created_at', 'updated_at']


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'art', 'comment', 'created_at', 'updated_at']