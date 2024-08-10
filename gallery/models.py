from django.db import models
from django.contrib.auth.models import User

class Home(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    art = models.ImageField(upload_to='home_art')
    description = models.TextField()
    instagram = models.URLField()
    twitter = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.artist.username