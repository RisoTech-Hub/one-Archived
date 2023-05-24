from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class CmsConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.cms"
    verbose_name = _("CMS")

    def ready(self):
        try:
            import one.cms.signals  # noqa: F401
        except ImportError:
            pass
