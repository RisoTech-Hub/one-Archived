from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SlugResolveConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "one.cms.slugresolve"
    verbose_name = _("CMS")

    def ready(self):
        try:
            import one.cms.slugresolve.signals  # noqa: F401
        except ImportError:
            pass
