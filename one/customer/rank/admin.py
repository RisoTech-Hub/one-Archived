from django.contrib import admin

from one.customer.rank.models import Rank
from one.libraries.utils.admin import MasterModelAdmin


@admin.register(Rank)
class RankAdmin(MasterModelAdmin):
    pass
