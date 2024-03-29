from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class RankConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.masterdata.rank"
    verbose_name = _("Rank Level")

    def ready(self):
        try:
            import one.masterdata.rank.signals  # noqa: F401
        except ImportError:
            pass
