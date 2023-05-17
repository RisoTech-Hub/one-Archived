from django.db.models import CASCADE, DecimalField, ForeignKey, Model
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.level.models import Level
from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM


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
    uom = ForeignKey(UOM, verbose_name=_("UOM"), on_delete=CASCADE, related_name="price_line")
    price = DecimalField(verbose_name=_("Price"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Price Line")
        verbose_name_plural = _("Price Line")
        db_table = "master_data_price_line"

    def __str__(self):
        return f"{self.price_list.name} - {self.sku.name}"
