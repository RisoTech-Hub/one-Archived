from django.core.management.base import BaseCommand

from one.masterdata.extrafeetype.models import ExtraFeeType
from one.masterdata.processingtasktype.models import ProcessingTaskType


class Command(BaseCommand):
    help = "Create Processing Task Type objects"
    data = {
        "CREATIVE": [
            {"code": "PROC_TASK_TYPE_QC", "name": "Quantity Control", "extra_fee_type_code": "EXTRAFEE_TYPE_QC"},
            {"code": "PROC_TASK_TYPE_VAT", "name": "VAT", "extra_fee_type_code": "EXTRAFEE_TYPE_VAT"},
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
            extra_fee_type_code = item.pop("extra_fee_type_code")
            extra_fee_type = ExtraFeeType.objects.get(code=extra_fee_type_code)
            ProcessingTaskType.objects.update_or_create(
                code=item["code"], name=item["name"], extra_fee_type=extra_fee_type
            )
        self.stdout.write(self.style.SUCCESS("Successfully created Processing Task Type objects."))
