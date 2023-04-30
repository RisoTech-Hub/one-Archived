from django.db.models import FloatField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Category(MasterModel, TimeStampedModel, UserStampedModel):
    point = FloatField(_("Point"), default=1)

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")
        db_table = "master_data_category"

    def __str__(self):
        return f"{self.name}"
