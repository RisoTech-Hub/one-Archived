from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin

from .models import UOM


@admin.register(UOM)
class UOMAdmin(MasterModelAdmin):
    pass
