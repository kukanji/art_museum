# Generated by Django 4.2.13 on 2024-08-19 09:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('gallery', '0005_comment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='art',
            name='gallery',
            field=models.ManyToManyField(related_name='gallery_arts', to='gallery.gallery'),
        ),
        migrations.AlterField(
            model_name='comment',
            name='art',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery_comments', to='gallery.art'),
        ),
        migrations.AlterField(
            model_name='gallery',
            name='artist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery_galleries', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='home',
            name='artist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gallery_homes', to=settings.AUTH_USER_MODEL),
        ),
    ]
