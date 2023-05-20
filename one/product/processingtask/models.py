from django.db.models import CASCADE, DateTimeField, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.processingtasktype.models import ProcessingTaskType
from one.product.models import Product
from one.staff.models import Staff


class ProcessingTask(TimeStampedModel, UserStampedModel):
    processing_task_type = ForeignKey(ProcessingTaskType, verbose_name=_("Processing Task Type"), on_delete=CASCADE)
    product = ForeignKey(Product, verbose_name=_("Product"), on_delete=CASCADE, null=True, blank=True)
    performed_by = ForeignKey(Staff, verbose_name=_("Performed By"), on_delete=CASCADE, null=True, blank=True)
    performed_at = DateTimeField(_("Performed At"), blank=True, null=True)

    class Meta:
        verbose_name = _("Processing Task")
        verbose_name_plural = _("Processing Tasks")
        db_table = "service_processing_task"

    def __str__(self):
        return self.processing_task_type.name
