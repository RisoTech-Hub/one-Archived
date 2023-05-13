from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.level.models import Level


@admin.register(Level)
class LevelAdmin(MasterModelAdmin):
    pass
