from django.db.models import CharField, Model, SlugField, TextField
from django.utils.text import slugify
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.models import UserStampedModel


class SeoModel(Model):
    meta_title = CharField(_("Meta Title"), max_length=500)
    meta_description = CharField(_("Meta Description"), max_length=255, blank=True, null=True)
    meta_keywords = CharField(_("Meta Keywords"), max_length=255, blank=True, null=True)

    class Meta:
        abstract = True


class ContentModel(UserStampedModel):
    title = CharField(_("Title"), max_length=500)
    slug = SlugField(_("Slug"), max_length=100, unique=True, blank=True)

    content = TextField(_("Content"))

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
