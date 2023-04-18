"""
Admin ui common utilities.
"""
import warnings
from fnmatch import fnmatch

from django.contrib import admin
from django.urls import reverse


def get_admin_site(context=None, request=None):
    return admin.site


def get_admin_site_name(context):
    return get_admin_site(context).name


def get_avail_models(request):
    """Returns (model, perm,) for all models user can possibly see"""
    items = []
    admin_site = get_admin_site(request=request)

    for model, model_admin in admin_site._registry.items():  # noqa
        perms = model_admin.get_model_perms(request)
        if True not in perms.values():
            continue
        items.append(
            (
                model,
                perms,
            )
        )
    return items


def filter_models(request, models, exclude):  # noqa: C901
    """
    Returns (model, perm,) for all models that match models/exclude patterns
    and are visible by current user.
    """
    items = get_avail_models(request)
    included = []

    def full_name(cls_model):
        return f"{cls_model.__module__}.{cls_model.__name__}"

    # I believe that that implemented
    # O(len(patterns)*len(matched_patterns)*len(all_models))
    # algorythm is fine for model lists because they are small and admin
    # performance is not a bottleneck. If it is not the case then the code
    # should be optimized.

    if len(models) == 0:
        included = items
    else:
        for pattern in models:
            wildcard_models = []
            for item in items:
                model, perms = item
                model_str = full_name(model)
                if model_str == pattern:
                    # exact match
                    included.append(item)
                elif fnmatch(model_str, pattern) and item not in wildcard_models:
                    # wildcard match, put item in separate list, so it can be
                    # sorted alphabetically later
                    wildcard_models.append(item)
            if wildcard_models:
                # sort wildcard matches alphabetically before adding them
                wildcard_models.sort(key=lambda x: x[0]._meta.verbose_name_plural)  # noqa
                included += wildcard_models

    result = included[:]
    for pattern in exclude:
        for item in included:
            model, perms = item
            if fnmatch(full_name(model), pattern):
                try:
                    result.remove(item)
                except ValueError:  # if the item was already removed skip
                    pass
    return result


class AppListElementMixin:
    """
    Mixin class used by AppListMenuItem
    """

    def _visible_models(self, request):
        # compatibility layer: generate models/exclude patterns
        # from include_list/exclude_list args

        if self.include_list:  # noqa
            warnings.warn(
                "`include_list` is deprecated for ModelList and AppList and "
                "will be removed in future releases. Please use `models` "
                "instead.",
                DeprecationWarning,
            )

        if self.exclude_list:  # noqa
            warnings.warn(
                "`exclude_list` is deprecated for ModelList and AppList and "
                "will be removed in future releases. Please use `exclude` "
                "instead.",
                DeprecationWarning,
            )

        included = self.models[:]  # noqa
        included.extend([elem + "*" for elem in self.include_list])  # noqa

        excluded = self.exclude[:]  # noqa
        excluded.extend([elem + "*" for elem in self.exclude_list])  # noqa
        if self.exclude_list and not included:  # noqa
            included = ["*"]
        return filter_models(request, included, excluded)

    def _get_admin_app_list_url(self, model, context):  # noqa
        """
        Returns the admin change url.
        """
        app_label = model._meta.app_label  # noqa
        return reverse(f"{get_admin_site_name(context)}:app_list", args=(app_label,))

    def _get_admin_change_url(self, model, context):  # noqa
        """
        Returns the admin change url.
        """
        app_label = model._meta.app_label  # noqa
        return reverse("{}:{}_{}_changelist".format(get_admin_site_name(context), app_label, model.__name__.lower()))

    def _get_admin_add_url(self, model, context):  # noqa
        """
        Returns the admin add url.
        """
        app_label = model._meta.app_label  # noqa
        return reverse("{}:{}_{}_add".format(get_admin_site_name(context), app_label, model.__name__.lower()))
