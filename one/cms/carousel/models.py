from django.db.models import CASCADE, CharField, ForeignKey, ImageField, TextField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeFramedModel, TimeStampedModel


class Carousel(TimeStampedModel, TimeFramedModel):
    name = CharField(_("Name"), max_length=255)
    description = TextField(_("Description"), blank=True, null=True)

    class Meta:
        verbose_name = "Carousel"
        verbose_name_plural = "Carousels"

    def __str__(self):
        return self.name


class CarouselItem(TimeStampedModel, TimeFramedModel):
    MEDIA_TYPE_IMAGE = "image"
    MEDIA_TYPE_VIDEO = "video"

    MEDIA_TYPES = (
        (MEDIA_TYPE_IMAGE, "Image"),
        (MEDIA_TYPE_VIDEO, "Video"),
    )

    carousel = ForeignKey(Carousel, on_delete=CASCADE, related_name="carousel_items")
    name = CharField(_("Name"), max_length=255)
    description = TextField(_("Description"), blank=True, null=True)
    media_type = CharField(
        _("Media Type"), max_length=255, choices=MEDIA_TYPES, default=MEDIA_TYPE_IMAGE
    )
    media_url = CharField(_("Video Url"), max_length=255, blank=True, null=True)
    media_alt = CharField(_("Media Alt"), max_length=255, blank=True, null=True)
    image = ImageField(_("Image File"), upload_to="", blank=True, null=True)

    class Meta:
        verbose_name = "Carousel Item"
        verbose_name_plural = "Carousel Items"

    def __str__(self):
        return self.name
