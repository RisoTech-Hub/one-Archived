from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class EventTrackingConfig(AppConfig):
    name = "one.libraries.eventtracking"
    verbose_name = _("Event Tracking")

    def ready(self):
        try:
            import one.libraries.eventtracking.signals  # noqa: F401
        except ImportError:
            pass
