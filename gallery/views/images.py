from django.shortcuts import render
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)

def top(request):
    artist = User.objects.all()
    logger.info("artist: %s", artist)
    logger.info("ok")
    logger.info("artist_dict:", list(artist)[0])
    return render(request, 'top.html', {'artist': artist})