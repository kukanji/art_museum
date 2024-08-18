from rest_framework import serializers
from .models import Home, Gallery, Art, Comment

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Home
        fields = ['id', 'artist', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at'] # Reactに渡す属性