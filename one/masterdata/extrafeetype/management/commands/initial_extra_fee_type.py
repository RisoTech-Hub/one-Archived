from django.core.management.base import BaseCommand

from one.masterdata.extrafeetype.models import ExtraFeeType


class Command(BaseCommand):
    help = "Create Extra Fee Type objects"
    data = {
        "CREATIVE": [
            {"code": "EXTRAFEE_TYPE_QC", "name": "Quantity Control"},
            {"code": "EXTRAFEE_TYPE_VAT", "name": "VAT"},
        ],
    }

    def add_arguments(self, parser):
        parser.add_argument("business_type", choices=["CREATIVE"], help="Business Type", default="creative")

    def handle(self, *args, **options):
        data = self.data["CREATIVE"]
        business_type = options.get("business_type", None)
        if business_type:
            data = self.data[business_type.upper()]

        for item in data:
            ExtraFeeType.objects.update_or_create(code=item["code"], name=item["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created Extra Fee Type objects."))
