from django.contrib.admin import ModelAdmin as BaseModelAdmin
from django.utils.translation import gettext_lazy as _


class ModelAdmin(BaseModelAdmin):
    ordering = ("-created",)
    readonly_fields = ("created", "modified")

    # override save_model method to add creator
    def save_model(self, request, obj, form, change):
        user = request.user
        if not obj.pk:
            obj.creator = user
        obj.last_modified_by = user
        super().save_model(request, obj, form, change)

    # override save_formset method to add creator
    def save_formset(self, request, form, formset, change):
        instances = formset.save(commit=False)
        for instance in instances:
            user = request.user
            if not instance.pk:
                instance.creator = user
            instance.last_modified_by = user
            instance.save()
        formset.save_m2m()


class MasterModelAdmin(ModelAdmin):
    readonly_fields = ("created", "modified", "creator", "last_modified_by")

    def get_fieldsets(self, request, obj=None):
        if obj:
            return (
                (None, {"fields": ("code", "name", "description")}),
                (_("User Stamped"), {"fields": ("creator", "last_modified_by")}),
                (_("Time Stamped"), {"fields": ("created", "modified")}),
            )
        else:
            return ((None, {"fields": ("name", "code", "description")}),)
