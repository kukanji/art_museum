from django.shortcuts import render
from django.contrib.auth.models import User
from gallery.models import Home, Gallery, Art, Comment
<<<<<<< HEAD

=======
>>>>>>> parent of 6ad66ef (django-environをインストールすることでなぜかSerializersがimport出来るようになった)
#import logging

#logger = logging.getLogger(__name__)

def top_page(request):
    all_artist = User.objects.all()
    return render(request, 'top_page.html', {'all_artist': all_artist})


def artist_home(request, username):
    print("username: ", username)
    #logger.info("username: %s", username)
    single_artist = User.objects.get(username=username)
    single_artist_home = Home.objects.get(artist = single_artist) # getの引数のartistはForeignKeyであり、idフィールドがnumberを期待しているため、usernameではなくsingle_artistを使う必要がある。
    multiple_gallery = Gallery.objects.filter(artist = single_artist)
    return render(request, 'artist_home.html', {'username': username,
                                                'single_artist_home': single_artist_home,
                                                'multiple_gallery': multiple_gallery})


def gallery(request, username, title):
    single_artist = User.objects.get(username=username)
    multiple_gallery = Gallery.objects.filter(artist = single_artist)
    single_gallery = Gallery.objects.get(title = title)
    #single_gallery = Gallery.objects.filter(title = title).values('description')
    multiple_art = Art.objects.filter(gallery = single_gallery)
    return render(request, 'gallery.html', {'username': username,
                                            'title': title,
                                            'multiple_gallery': multiple_gallery,
                                            'single_gallery': single_gallery,
                                            'multiple_art': multiple_art})


def comment(request, username, title, single_art_id):
    multiple_comment = Comment.objects.filter(art_id = single_art_id)
    return render(request, 'comment.html', {'username': username,
                                           'title': title,
                                           'multiple_comment': multiple_comment})