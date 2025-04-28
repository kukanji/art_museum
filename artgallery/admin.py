from django.contrib import admin
from .models import Home, Gallery, Art, Comment
from django.utils.safestring import mark_safe

class HomeAdmin(admin.ModelAdmin):
    list_display = ('artist','thumbnail', 'art', 'description', 'instagram', 'twitter', 'created_at', 'updated_at')
    readonly_fields = ('thumbnail',)

    def thumbnail(self, obj):
        if obj.art:
            return mark_safe(f'<img src="{obj.art.url}" width="100" height="100" />')
        return "No Image"
    
    thumbnail.short_description = 'Thumbnail'


class GalleryAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'description', 'created_at', 'updated_at')


class ArtAdmin(admin.ModelAdmin):
    list_display = ('title', 'thumbnail_img', 'description', '_gallery', 'art', 'like_sum', 'created_at', 'updated_at')
    readonly_fields = ('thumbnail_img',)

    def thumbnail_img(self, obj):
        if obj.art:
            return mark_safe(f'<img src="{obj.art.url}" width="100" height="100" />')
        return "No Image"
    
    thumbnail_img.short_description = 'Thumbnail'

    def _gallery(self, obj):
        return ', '.join(single_gallery.title for single_gallery in obj.gallery.all())


class CommentAdmin(admin.ModelAdmin):
    list_display = ('art', 'comment', 'created_at', 'updated_at')


admin.site.register(Home, HomeAdmin)
admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Art, ArtAdmin)
admin.site.register(Comment, CommentAdmin)