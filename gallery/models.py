from django.db import models
from django.contrib.auth.models import User

class Home(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    art = models.ImageField(upload_to='art_home', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    instagram = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.artist.username
    
class Gallery(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class Art(models.Model):
    gallery = models.ManyToManyField(Gallery)
    art = models.ImageField(upload_to='art_gallery')
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    like_sum = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
