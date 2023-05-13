from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.rank.models import Rank


@admin.register(Rank)
class RankAdmin(MasterModelAdmin):
    pass
