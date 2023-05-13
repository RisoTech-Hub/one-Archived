from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Package(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Package")
        verbose_name_plural = _("Packages")
        db_table = "master_data_package"

    def __str__(self):
        return f"{self.name}"
