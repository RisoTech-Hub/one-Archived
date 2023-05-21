from django.db.models import ManyToManyField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel
from one.masterdata.processingtasktype.models import ProcessingTaskType


class ValueAddedServiceType(MasterModel, TimeStampedModel, UserStampedModel):
    processing_tasks = ManyToManyField(
        ProcessingTaskType,
        verbose_name=_("Processing Tasks"),
        related_name="value_added_service_types",
        blank=True,
    )

    class Meta:
        verbose_name = _("Value Added Service Type")
        verbose_name_plural = _("Value Added Service Types")
        db_table = "master_data_value_added_service_type"
