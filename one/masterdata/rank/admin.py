from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.rank.models import Rank


@admin.register(Rank)
class RankAdmin(MasterModelAdmin):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("discount",)
        return fieldsets
