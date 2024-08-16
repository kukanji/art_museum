from django.contrib import admin
from .models import Home, Gallery, Art

class HomeAdmin(admin.ModelAdmin):
    list_display = ('artist', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at')

class GalleryAdmin(admin.ModelAdmin):
    list_display = ('artist', 'title', 'description', 'created_at', 'updated_at')

class ArtAdmin(admin.ModelAdmin):
    list_display = ('_gallery', 'art', 'title', 'description', 'like_sum', 'created_at', 'updated_at')

    def _gallery(self, obj):
        return ', '.join(single_gallery.title for single_gallery in obj.gallery.all())


admin.site.register(Home, HomeAdmin)
admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Art, ArtAdmin)
