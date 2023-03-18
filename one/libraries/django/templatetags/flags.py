from django import template

register = template.Library()


# switch_languages
@register.inclusion_tag("switch_languages.html", takes_context=True)
def switch_languages(context, flag_type="", tag_type="", **kwargs):
    """
    Templatetag languages
    :param tag_type:
    :param context: Getting context
    :param flag_type: Default empty, It accepts the string 'square'
    :param kwargs: Classes to HTML tags
    :return: A dict with classes
    """
    FLAG_TYPES = {
        "square": "flag-icon-squared",
        "rounded": "flag-icon-rounded",
        "rect": "",
    }
    flag_type = FLAG_TYPES.get(flag_type, "")

    default = dict(li_class="", a_class="")
    classes = dict(default, **kwargs)
    return {
        "icon_class": flag_type,
        "classes": classes,
        "redirect_to": context.request.get_full_path,
        "tag_type": tag_type,
    }
