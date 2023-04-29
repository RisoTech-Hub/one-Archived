from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Level(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Level")
        verbose_name_plural = _("Levels")
        db_table = "supplier_level"

    def __str__(self):
        return f"{self.name}"
