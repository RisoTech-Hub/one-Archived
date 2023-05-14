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
        super().save_formset(request, form, formset, change)
        for _form in formset:
            if not _form.cleaned_data.get("DELETE", False) and hasattr(_form.instance, "creator"):
                instance = _form.instance
                if instance.creator is None:
                    instance.creator = request.user
                instance.last_modified_by = request.user
                instance.save()


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

    def get_readonly_fields(self, request, obj=None):
        readonly_fields = super().get_readonly_fields(request, obj)
        if obj:
            return readonly_fields + ("code",)  # noqa
        else:
            return readonly_fields

    def get_list_display(self, request):
        list_display = super().get_list_display(request)
        return list_display + ("code", "is_active")
