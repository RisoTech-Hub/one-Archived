import threading

from django.conf import settings
from django.contrib.auth.models import AnonymousUser

_thread_local = threading.local()


class CurrentUserMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        _thread_local.current_user = request.user
        _thread_local.request_method = request.method
        _thread_local.request_path = request.path
        _thread_local.is_admin = getattr(settings, "ADMIN_URL", "admin/") in request.path
        _thread_local.request_ip = request.META.get("REMOTE_ADDR")
        response = self.get_response(request)
        return response


def get_current_user():
    current_user = getattr(_thread_local, "current_user", None)
    if isinstance(current_user, AnonymousUser):
        return None
    return current_user


def get_request_method():
    return getattr(_thread_local, "request_method", None)


def get_request_path():
    return getattr(_thread_local, "request_path", None)


def get_request_ip():
    return getattr(_thread_local, "request_ip", None)


def is_admin_request():
    return getattr(_thread_local, "is_admin", False)
