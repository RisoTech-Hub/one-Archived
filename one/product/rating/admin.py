from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from one.libraries.utils.admin import ModelAdmin
from one.product.rating.models import Rating


@admin.register(Rating)
class RatingAdmin(ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by", "content_object", "rated_object")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("rating", "comment")}),
                (_("Rated for"), {"fields": ("content_type", "object_id", "content_object")}),
                (_("Rated by"), {"fields": ("rated_content_type", "rated_object_id", "rated_object")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return (
                (None, {"fields": ("rating", "comment")}),
                (_("Rated for"), {"fields": ("content_type", "object_id", "content_object")}),
                (_("Rated by"), {"fields": ("rated_content_type", "rated_object_id", "rated_object")}),
            )
