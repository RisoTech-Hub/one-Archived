from django.contrib.admin import TabularInline

from one.supplier.supplierlevel.models import SupplierLevel


class SupplierLevelInline(TabularInline):
    model = SupplierLevel
