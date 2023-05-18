from django.db.models import CASCADE, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.processingtasktype.models import ProcessingTaskType
from one.product.models import Product


class ProcessingTask(TimeStampedModel, UserStampedModel):
    processing_task_type = ForeignKey(ProcessingTaskType, verbose_name=_("Processing Task Type"), on_delete=CASCADE)
    product = ForeignKey(Product, verbose_name=_("Product"), on_delete=CASCADE, null=True, blank=True)

    class Meta:
        verbose_name = _("Processing Task")
        verbose_name_plural = _("Processing Tasks")
        db_table = "service_processing_task"

    def __str__(self):
        return self.processing_task_type.name
