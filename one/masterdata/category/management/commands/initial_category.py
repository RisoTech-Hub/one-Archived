from django.core.management.base import BaseCommand

from one.masterdata.category.models import Category


class Command(BaseCommand):
    help = "Create Category objects"
    data = {
        "CREATIVE": [
            {"code": "CATE_REAL_ESTATE", "name": "Real estate"},
            {"code": "CATE_ECOMMERCE", "name": "E-commerce"},
            {"code": "CATE_IT", "name": "Information technology"},
            {"code": "CATE_MANUFACTURING", "name": "Manufacturing industry"},
            {"code": "CATE_MEDIA", "name": "Advertising and media"},
            {"code": "CATE_HOSPITALITY", "name": "Tourism and hospitality"},
            {"code": "CATE_BEAUTY", "name": "Fashion and beauty"},
            {"code": "CATE_EDU", "name": "Education and training"},
            {"code": "CATE_SPORT", "name": "Sports and entertainment"},
            {"code": "CATE_ART", "name": "Arts and culture"},
            {"code": "CATE_HEALTH", "name": "Health care and wellness"},
            {"code": "CATE_FINANCE", "name": "Finance and banking"},
            {"code": "CATE_SCIENCE", "name": "Science and research"},
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
            Category.objects.update_or_create(code=item["code"], name=item["name"])
        self.stdout.write(self.style.SUCCESS("Successfully created Category objects."))
