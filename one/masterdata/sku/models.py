from django.db.models import CASCADE, FloatField, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.uom.models import UOM


class SKU(MasterModel, TimeStampedModel, UserStampedModel):
    base_uom = ForeignKey(UOM, verbose_name=_("Base UOM"), on_delete=CASCADE, related_name="master_data_skus")
    point = FloatField(_("Point"), default=1)
    markup = FloatField(_("Markup"), default=0)

    class Meta:
        verbose_name = _("SKU")
        verbose_name_plural = _("SKU")
        db_table = "master_data_sku"

    def __str__(self):
        return f"{self.name}"
