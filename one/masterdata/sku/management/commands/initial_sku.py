from django.core.management.base import BaseCommand

from one.masterdata.sku.models import SKU
from one.masterdata.uom.models import UOM


class Command(BaseCommand):
    help = "Create Package objects"
    sku_data = {
        "CREATIVE": [
            {"code": "SKU_POST_BLOG", "name": "Blog Post", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_POST_WEB", "name": "Website Post", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_POST_PR", "name": "PR Post", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_POST_AOC", "name": "AOC Post", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_POST_ADS", "name": "Ads Post", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_POST_SEO", "name": "Bài SEO", "uom": "UOM_WORD", "markup": 1},
            {"code": "SKU_VISUAL_VIDEO", "name": "Video(Visual)", "uom": "UOM_SECOND", "markup": 1},
            {"code": "SKU_SCRIPT", "name": "Kịch bản", "uom": "UOM_SECOND", "markup": 1},
            {"code": "SKU_VISUAL_SINGLE_PHOTO", "name": "Single Photo(Visual)", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_VISUAL_CAROUSEL", "name": "Multi / Carousel(Visual)", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_DIRECTION_WEEKLY", "name": "Weekly Content Direction", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_DIRECTION_MONTHLY", "name": "Monthly Content Direction", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_PLAN_CONTENT", "name": "Content Plan", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_PLAN_CREATIVE", "name": "Creative Plan", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_PLAN_DIGITAL", "name": "Digital Plan", "uom": "UOM_PIECE", "markup": 1},
            {"code": "SKU_TRAINING_COPYWRITING", "name": "Training Copywriting", "uom": "UOM_SECTION", "markup": 1},
            {"code": "SKU_TRAINING_PLANNING", "name": "Training Creative Planning", "uom": "UOM_SECTION", "markup": 1},
        ],
    }

    def add_arguments(self, parser):
        parser.add_argument("business_type", choices=["CREATIVE"], help="Business Type", default="creative")

    def handle(self, *args, **options):
        sku_data = self.sku_data["CREATIVE"]
        business_type = options.get("business_type", None)
        if business_type:
            sku_data = self.sku_data[business_type.upper()]
        for sku in sku_data:
            SKU.objects.update_or_create(
                code=sku["code"],
                name=sku["name"],
                base_uom=UOM.objects.filter(code=sku["uom"]).first(),
                markup=sku["markup"],
            )
        self.stdout.write(self.style.SUCCESS("Successfully created SKU objects."))
