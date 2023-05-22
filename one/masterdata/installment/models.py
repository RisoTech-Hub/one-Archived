from django.db.models import CASCADE, CharField, DecimalField, ForeignKey, IntegerField, Model
from django.utils.translation import gettext_lazy as _
from model_utils.models import TimeStampedModel

from one.libraries.utils.models import MasterModel, UserStampedModel


class Installment(MasterModel, TimeStampedModel, UserStampedModel):
    class Meta:
        verbose_name = _("Installment")
        verbose_name_plural = _("Installments")
        db_table = "master_data_installment"

    def __str__(self):
        return f"{self.name}"


class InstallmentLine(Model):
    installment = ForeignKey(
        Installment,
        on_delete=CASCADE,
        related_name="installment_lines",
        verbose_name=_("Installment"),
    )
    installment_number = IntegerField()
    percentage = DecimalField(max_digits=5, decimal_places=2)
    description = CharField(_("Description"), max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = _("Installment Line")
        verbose_name_plural = _("Installment Lines")
        db_table = "master_data_installment_line"
