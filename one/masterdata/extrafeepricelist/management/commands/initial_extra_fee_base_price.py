from datetime import datetime

from django.core.management.base import BaseCommand

from one.masterdata.extrafeepricelist.models import ExtraFeePriceLine, ExtraFeePriceList
from one.masterdata.extrafeetype.models import ExtraFeeType


class Command(BaseCommand):
    help = "Create Extra Fee Base Price objects"
    data = {
        "CREATIVE": [
            {
                "code": "EXTRAFEE_BASE_PRICE",
                "name": "Base Extra Fee Price",
                "extra_fee_types": [
                    {
                        "extra_fee_type_code": "EXTRAFEE_TYPE_QC",
                        "calculate_type": ExtraFeePriceLine.CALCULATE_TYPE_PERCENTAGE,
                        "unit_percentage": 2.00,
                    },
                    {
                        "extra_fee_type_code": "EXTRAFEE_TYPE_VAT",
                        "calculate_type": ExtraFeePriceLine.CALCULATE_TYPE_PERCENTAGE,
                        "unit_percentage": 10.00,
                    },
                ],
            },
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
            extra_fee, _ = ExtraFeePriceList.objects.update_or_create(
                code=item["code"], name=item["name"], effective_date=datetime.now()
            )
            for extra_fee_type in item["extra_fee_types"]:
                _extra_fee_type = ExtraFeeType.objects.get(code=extra_fee_type["extra_fee_type_code"])
                ExtraFeePriceLine.objects.update_or_create(
                    extra_fee_price_list=extra_fee,
                    extra_fee_type=_extra_fee_type,
                    calculate_type=extra_fee_type["calculate_type"],
                    unit_percentage=extra_fee_type["unit_percentage"],
                )
        self.stdout.write(self.style.SUCCESS("Successfully created Extra Fee Base Price objects."))
