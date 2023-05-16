from django.contrib.admin import StackedInline

from one.supplier.supplierprofile.models import SupplierProfile


class SupplierProfileInline(StackedInline):
    model = SupplierProfile
    filter_horizontal = ("favorite_category", "favorite_sku")
