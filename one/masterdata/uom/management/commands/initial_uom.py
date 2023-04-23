from django.core.management.base import BaseCommand

from one.masterdata.uom.models import UOM


class Command(BaseCommand):
    help = "Create UOM objects"
    uom_data = {
        "CREATIVE": [
            {"code": "UOM_CHU", "name": "Chữ"},
            {"code": "UOM_BAI_VIET", "name": "Bài viết"},
            {"code": "UOM_KICH_BAN", "name": "Kịch Bản"},
            {"code": "UOM_SAN_PHAM", "name": "Sản Phẩm"},
            {"code": "UOM_BUOI", "name": "Buổi"},
            {"code": "UOM_PLAN", "name": "Kế hoạch"},
            {"code": "UOM_GIAY", "name": "Giây"},
        ],
    }

    def add_arguments(self, parser):
        parser.add_argument("business_type", choices=["CREATIVE"], help="Business Type", default="creative")

    def handle(self, *args, **options):
        uom_data = self.uom_data["CREATIVE"]
        business_type = options.get("business_type", None)
        if business_type:
            uom_data = self.uom_data[business_type.upper()]
        for uom in uom_data:
            UOM.objects.update_or_create(code=uom["code"], name=uom["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created UOM objects."))
