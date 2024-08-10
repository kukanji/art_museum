from django.shortcuts import render
from django.contrib.auth.models import User

def top(request):
    artist = User.objects.all()
    print(artist)
    return render(request, 'top.html', {'artist': artist})