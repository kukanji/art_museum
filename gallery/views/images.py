from django.shortcuts import render
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)

def top_page(request):
    artist_list = User.objects.all()
    return render(request, 'top_page.html', {'artist_list': artist_list})

def artist_home(request, username):
    artist = User.objects.get(username=username)
    return render(request, 'artist_home.html', {'artist': artist})