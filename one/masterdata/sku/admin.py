from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.sku.models import SKU


@admin.register(SKU)
class SKUAdmin(MasterModelAdmin):
    pass
