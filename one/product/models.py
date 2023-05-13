from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel


class Product(TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Product")
        verbose_name_plural = _("Products")
        db_table = "product_product"
