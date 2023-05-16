from django.db.models import ForeignKey, CASCADE
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class UOM(MasterModel, TimeStampedModel, UserStampedModel):
    is_active = None
    base_uom = ForeignKey("self", verbose_name=_("Base UOM"), on_delete=CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = _("UOM")
        verbose_name_plural = _("UOM")
        db_table = "master_data_uom"
