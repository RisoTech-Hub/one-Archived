from django.contrib import admin
from django.contrib.admin import TabularInline

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.installment.models import Installment, InstallmentLine


class InstallmentLineInline(TabularInline):
    model = InstallmentLine
    can_delete = True
    extra = 0


@admin.register(Installment)
class InstallmentAdmin(MasterModelAdmin):
    inlines = [InstallmentLineInline]
