from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, DateTimeField, ForeignKey, PositiveIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import UserStampedModel
from one.masterdata.processingtasktype.models import ProcessingTaskType
from one.staff.models import Staff


class ProcessingTask(TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "order", "model": "order"},
        {"app_label": "product", "model": "product"},
    ]

    processing_task_type = ForeignKey(ProcessingTaskType, verbose_name=_("Processing Task Type"), on_delete=CASCADE)

    # task for object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    performed_by = ForeignKey(Staff, verbose_name=_("Performed By"), on_delete=CASCADE, null=True, blank=True)
    performed_at = DateTimeField(_("Performed At"), blank=True, null=True)

    class Meta:
        verbose_name = _("Processing Task")
        verbose_name_plural = _("Processing Tasks")
        db_table = "service_processing_task"

    def __str__(self):
        return self.processing_task_type.name
