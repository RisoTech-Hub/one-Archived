from django.contrib.admin import TabularInline

from .models import UOMConversion


class UOMConversionInline(TabularInline):
    model = UOMConversion
    can_delete = True
    extra = 0
    exclude = (
        "creator",
        "last_modified_by",
    )
