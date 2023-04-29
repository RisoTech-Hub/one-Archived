from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Rank(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Rank")
        verbose_name_plural = _("Ranks")
        db_table = "customer_rank"

    def __str__(self):
        return f"{self.name}"
