from django.contrib import admin
from django.utils.translation import gettext_lazy as _

from .forms import EventTrackingAdminForm
from .models import EventTracking


@admin.register(EventTracking)
class EventTrackingAdmin(admin.ModelAdmin):
    list_display = ("code", "name", "status", "user", "ip")
    list_filter = ("status", "user")
    search_fields = ("code", "name", "user__username", "ip")
    readonly_fields = ("created", "modified")
    form = EventTrackingAdminForm

    fieldsets = (
        (None, {"fields": ("code", "name", "status")}),
        (_("User"), {"fields": ("user", "ip")}),
        (_("Time Stamped"), {"fields": ("created", "modified")}),
        (None, {"fields": ("logs",)}),
    )
