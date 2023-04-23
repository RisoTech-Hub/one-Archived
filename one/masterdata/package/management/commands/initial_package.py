from django.core.management.base import BaseCommand

from one.masterdata.package.models import Package


class Command(BaseCommand):
    help = "Create Package objects"
    package_data = {
        "CREATIVE": [],
    }

    def add_arguments(self, parser):
        parser.add_argument("business_type", choices=["CREATIVE"], help="Business Type", default="creative")

    def handle(self, *args, **options):
        package_data = self.package_data["CREATIVE"]
        business_type = options.get("business_type", None)
        if business_type:
            package_data = self.package_data[business_type.upper()]
        for package in package_data:
            Package.objects.update_or_create(code=package["code"], name=package["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created Package objects."))
