from django.core.management.base import BaseCommand

from one.customer.rank.models import Rank


class Command(BaseCommand):
    help = "Create Rank objects"
    data = {
        "CREATIVE": [
            {"code": "CUST_RNK_BRONZE", "name": "Bronze"},
            {"code": "CUST_RNK_SILVER", "name": "Silver"},
            {"code": "CUST_RNK_GOLD", "name": "Gold"},
            {"code": "CUST_RNK_PLATINUM", "name": "Platinum"},
            {"code": "CUST_RNK_DIAMOND", "name": "Diamond"},
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
            Rank.objects.update_or_create(code=item["code"], name=item["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created Customer Rank objects."))
