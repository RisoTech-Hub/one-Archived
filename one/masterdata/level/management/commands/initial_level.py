from django.core.management.base import BaseCommand

from one.masterdata.level.models import Level


class Command(BaseCommand):
    help = "Create Level objects"
    data = {
        "CREATIVE": [
            {"code": "SUPP_LVL_BEGINNER", "name": "Beginner"},
            {"code": "SUPP_LVL_JUNIOR", "name": "Junior"},
            {"code": "SUPP_LVL_INTERMEDIATE", "name": "Intermediate"},
            {"code": "SUPP_LVL_SENIOR", "name": "Senior"},
            {"code": "SUPP_LVL_EXPERT", "name": "Expert"},
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
            Level.objects.update_or_create(code=item["code"], name=item["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created Supplier Level objects."))
