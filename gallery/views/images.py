from django.shortcuts import render
from django.contrib.auth.models import User
from gallery.models import Home, Gallery, Art
import logging

logger = logging.getLogger(__name__)

def top_page(request):
    get_all_artist = User.objects.all()
    return render(request, 'top_page.html', {'get_all_artist': get_all_artist})

def artist_home(request, username):
    print("username: ", username)
    logger.info("username: %s", username)
    get_single_artist = User.objects.get(username=username)
    get_single_artist_home = Home.objects.get(artist = get_single_artist) # getの引数のartistはForeignKeyであり、idフィールドがnumberを期待しているため、usernameではなくget_single_artistを使う必要がある。
    get_multiple_artist_gallery = Gallery.objects.filter(artist = get_single_artist)
    return render(request, 'artist_home.html', {'username': username,
                                                'get_single_artist_home': get_single_artist_home,
                                                'get_multiple_artist_gallery': get_multiple_artist_gallery})

def gallery(request, username):
    get_single_artist = User.objects.get(username=username)
    return render(request, 'gallery.html', {'username': username})