from django.db.models import CharField, Model
from django.utils.translation import gettext_lazy as _


class SeoModel(Model):
    title = CharField(_("Title"), max_length=500)
    description = CharField(_("Description"), max_length=255, blank=True, null=True)
    keywords = CharField(_("Keywords"), max_length=255, blank=True, null=True)

    slug = CharField(_("Slug"), max_length=255, unique=True)

    class Meta:
        abstract = True
