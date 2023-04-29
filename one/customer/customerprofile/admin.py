from django.contrib.admin import StackedInline

from one.customer.customerprofile.models import CustomerProfile


class CustomerProfileInline(StackedInline):
    model = CustomerProfile
