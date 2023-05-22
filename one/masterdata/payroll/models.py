from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db.models import CASCADE, DateField, DecimalField, ForeignKey, PositiveIntegerField
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Payroll(MasterModel, TimeStampedModel, UserStampedModel):
    BASE_MODEL_ALLOWED = [
        {"app_label": "staff", "model": "staff"},
        {"app_label": "supplier", "model": "supplier"},
    ]
    # Based on Object
    content_type = ForeignKey(ContentType, on_delete=CASCADE, related_name="+")
    object_id = PositiveIntegerField()
    content_object = GenericForeignKey()

    effective_date = DateField(_("Effective Date"), blank=False, null=False)
    expiry_date = DateField(_("Expiry Date"), blank=True, null=True)

    allowance = DecimalField(_("Unit Price"), max_digits=20, decimal_places=2, default=0.00)

    class Meta:
        verbose_name = _("Payroll")
        verbose_name_plural = _("Payrolls")
        db_table = "master_data_payroll"

    def __str__(self):
        return f"{self.name}"
