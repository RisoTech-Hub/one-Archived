from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, ForeignKey
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Workflow(MasterModel, TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "order", "model": "order"},
    ]
    triggered_by = ForeignKey(ContentType, on_delete=CASCADE)

    class Meta:
        verbose_name = _("Workflow")
        verbose_name_plural = _("Workflows")
        db_table = "workflow_workflow"

    def __str__(self):
        return f"{self.name}"
