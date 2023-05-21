from django.db.models import CASCADE, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.extrafeetype.models import ExtraFeeType


class ProcessingTaskType(MasterModel, TimeStampedModel, UserStampedModel):
    extra_fee_type = ForeignKey(
        ExtraFeeType,
        on_delete=CASCADE,
        related_name="processing_task_types",
        verbose_name=_("Extra Fee Type"),
    )

    class Meta:
        verbose_name = _("Processing Task Type")
        verbose_name_plural = _("Processing Task Types")
        db_table = "master_data_processing_task_type"
