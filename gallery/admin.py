from django.contrib import admin
from .models import Home, Gallery

class HomeAdmin(admin.ModelAdmin):
    list_display = ('artist', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at')

class GalleryAdmin(admin.ModelAdmin):
    list_display = ('artist', 'title', 'description', 'created_at', 'updated_at')


admin.site.register(Home, HomeAdmin)
admin.site.register(Gallery, GalleryAdmin)
