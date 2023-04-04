from django.db.models import CharField, ImageField, TextField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeFramedModel, TimeStampedModel


class Testimonial(TimeStampedModel, TimeFramedModel):
    name = CharField(_("Name"), max_length=255)
    description = TextField(_("Description"), blank=True, null=True)
    image = ImageField(_("Image File"), upload_to="", blank=True, null=True)

    class Meta:
        verbose_name = "Carousel"
        verbose_name_plural = "Carousels"

    def __str__(self):
        return self.name
