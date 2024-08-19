from rest_framework import serializers
from .models import Home, Gallery, Art, Comment
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']


class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = ['id', 'artist', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at']

