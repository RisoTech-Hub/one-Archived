from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, CharField, ForeignKey, Model, PositiveIntegerField
from django.utils.translation import gettext_lazy as _


class SlugResolve(Model):
    slug = CharField(_("Slug"), max_length=255, unique=True)

    # Based on Object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    class Meta:
        verbose_name = _("Slug Resolve")
        verbose_name_plural = _("Slug Resolves")
        db_table = "cms_slug_resolve"
