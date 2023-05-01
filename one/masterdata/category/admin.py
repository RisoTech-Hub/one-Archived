from django.contrib import admin

from one.libraries.utils.admin import MasterModelAdmin
from one.masterdata.category.models import Category


@admin.register(Category)
class CategoryAdmin(MasterModelAdmin):
    def get_fieldsets(self, request, obj=None):
        fieldsets = super().get_fieldsets(request, obj)
        fieldsets[0][1]["fields"] += ("point",)
        return fieldsets

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("point",)
