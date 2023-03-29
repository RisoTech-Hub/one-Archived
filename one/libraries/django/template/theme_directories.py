from constance import config
from django.template.loaders.filesystem import Loader as BaseLoader


class Loader(BaseLoader):
    def get_dirs(self):
        dirs = super().get_dirs()
        try:
            return [
                self.engine.dirs[0] + "/ui/" + config.UI_THEME_SELECT,
                self.engine.dirs[0] + "/" + config.ADMIN_THEME_SELECT,
            ] + dirs
        except Exception:  # noqa
            return [
                self.engine.dirs[0] + "/ui/default",
                self.engine.dirs[0] + "/admin",
            ] + dirs
