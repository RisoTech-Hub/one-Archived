from django.db.models import CASCADE, ForeignKey, PositiveBigIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM


class UOMConversion(MasterModel, TimeStampedModel, UserStampedModel):
    code = None
    is_active = None
    name = None
    description = None

    sku = ForeignKey(SKU, verbose_name=_("SKU"), on_delete=CASCADE, related_name="conversions")

    parent_uom = ForeignKey(UOM, verbose_name=_("Parent UOM"), on_delete=CASCADE, related_name="as_parent_conversions")
    child_uom = ForeignKey(UOM, verbose_name=_("Child UOM"), on_delete=CASCADE, related_name="as_child_conversions")

    ratio = PositiveBigIntegerField(_("Ratio"), default=0)
    base_uom_ratio = PositiveBigIntegerField(_("Base UOM Ratio"), default=0)

    class Meta:
        verbose_name = _("UOM Conversion")
        verbose_name_plural = _("UOM Conversions")
        db_table = "master_data_uom_conversion"

    def __str__(self):
        return "{}: {} = {} x {}".format(self.sku, self.parent_uom, self.ratio, self.child_uom)
