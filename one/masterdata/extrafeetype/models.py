from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class ExtraFeeType(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Extra Fee Type")
        verbose_name_plural = _("Extra Fee Types")
        db_table = "master_data_extra_fee_type"
