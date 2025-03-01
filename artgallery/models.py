from django.db import models
from django.contrib.auth.models import User
from PIL import Image
from io import BytesIO
from django.core.files import File
from django.core.files.base import ContentFile

class Home(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    art = models.ImageField(upload_to='art_home', null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    instagram = models.URLField(null=True, blank=True)
    twitter = models.URLField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        img = Image.open(self.art)
        img = img.convert('RGB')
        output = BytesIO()
        img.save(output, format='JPEG', quality=20)
        output.seek(0)
        self.art = File(output, self.art.name.split('.')[0] + '.jpg')
        super(Home, self).save(*args, **kwargs)

    def __str__(self):
        return self.artist.username
    
class Gallery(models.Model):
    artist = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Art(models.Model):
    gallery = models.ManyToManyField(Gallery)
    art = models.ImageField(upload_to='arts/')
    thumbnail = models.ImageField(upload_to='arts/thumbnails/', blank=True)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    like_sum = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.art:
            # オリジナル画像の処理
            img = Image.open(self.art)
            img = img.convert('RGB')
            
            # オリジナル画像のリサイズ処理
            max_original_size = 2000
            if img.width > max_original_size or img.height > max_original_size:
                ratio = min(max_original_size/img.width, max_original_size/img.height)
                new_size = (int(img.width * ratio), int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
            
            # オリジナル画像の保存
            output = BytesIO()
            img.save(output, format='JPEG', quality=85)
            output.seek(0)
            self.art = File(output, self.art.name)

            # サムネイルの作成
            thumb_size = 400
            thumb_img = Image.open(self.art)
            # サムネイルのリサイズ処理
            ratio = min(thumb_size/thumb_img.width, thumb_size/thumb_img.height)
            new_size = (int(thumb_img.width * ratio), int(thumb_img.height * ratio))
            thumb_img = thumb_img.resize(new_size, Image.Resampling.LANCZOS)
            
            # サムネイルの保存
            thumb_output = BytesIO()
            thumb_img.save(thumb_output, format='JPEG', quality=75)
            thumb_output.seek(0)
            
            # サムネイルのファイル名を生成
            thumb_filename = f'thumb_{self.art.name.split("/")[-1]}'
            self.thumbnail.save(thumb_filename, ContentFile(thumb_output.getvalue()), save=False)

        super(Art, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class Comment(models.Model):
    art = models.ForeignKey(Art, on_delete=models.CASCADE)
    comment = models.TextField(null=False, blank=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.comment
    
