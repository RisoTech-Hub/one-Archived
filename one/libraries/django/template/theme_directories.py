from constance import config
from django.template.loaders.filesystem import Loader as BaseLoader

from one.libraries.eventtracking.middleware import is_admin_request


class Loader(BaseLoader):
    def get_dirs(self):
        dirs = super().get_dirs()

        try:
            _dirs = (
                [
                    self.engine.dirs[0] + "/" + config.ADMIN_THEME_SELECT,
                ]
                if is_admin_request()
                else [
                    self.engine.dirs[0] + "/ui/" + config.UI_THEME_SELECT,
                ]
            )
            return _dirs + dirs
        except Exception:  # noqa
            _dirs = (
                [
                    self.engine.dirs[0] + "/admin",
                ]
                if is_admin_request()
                else [
                    self.engine.dirs[0] + "/ui/default",
                ]
            )
            return _dirs + dirs
