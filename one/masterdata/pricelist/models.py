from django.contrib.postgres.fields import DecimalRangeField
from django.db.models import CASCADE, ForeignKey, Model
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.level.models import Level
from one.masterdata.sku.models import SKU


class PriceList(MasterModel, TimeStampedModel, UserStampedModel):
    level = ForeignKey(Level, verbose_name=_("Supplier Level"), on_delete=CASCADE, related_name="price_list")

    class Meta:
        verbose_name = _("Price List")
        verbose_name_plural = _("Price List")
        db_table = "master_data_price_list"

    def __str__(self):
        return f"{self.name}"


class PriceLine(Model):
    price_list = ForeignKey(PriceList, verbose_name=_("Price List"), on_delete=CASCADE, related_name="price_line")
    sku = ForeignKey(SKU, verbose_name=_("SKU"), on_delete=CASCADE, related_name="price_line")
    base_price = DecimalRangeField(verbose_name=_("Base Price"), default=0.0)

    class Meta:
        verbose_name = _("Price Line")
        verbose_name_plural = _("Price Line")
        db_table = "master_data_price_line"

    def __str__(self):
        return f"{self.price_list.name} - {self.sku.name}"
