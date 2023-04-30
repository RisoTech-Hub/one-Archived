from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.category.models import Category


@admin.register(Category)
class CategoryAdmin(MasterModelAdmin):
    pass
