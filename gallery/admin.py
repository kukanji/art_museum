from django.contrib import admin
from .models import Home

class HomeAdmin(admin.ModelAdmin):
    list_display = ('artist', 'description', 'instagram', 'twitter', 'created_at', 'updated_at')

admin.site.register(Home, HomeAdmin)