from django.core.management.base import BaseCommand

from one.masterdata.processingtasktype.models import ProcessingTaskType
from one.masterdata.valueaddedservicetype.models import ValueAddedServiceType


class Command(BaseCommand):
    help = "Create Extra Fee Type objects"
    data = {
        "CREATIVE": [
            {"code": "EXTRAFEE_TYPE_QC", "name": "Quantity Control", "processing_task_types": ["PROC_TASK_TYPE_QC"]},
            {"code": "EXTRAFEE_TYPE_VAT", "name": "VAT", "processing_task_types": ["PROC_TASK_TYPE_VAT"]},
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
            vas_type, _ = ValueAddedServiceType.objects.update_or_create(code=item["code"], name=item["name"])
            for proc_task_type_code in item["processing_task_types"]:
                proc_task_type = ProcessingTaskType.objects.get(code=proc_task_type_code)
                vas_type.processing_tasks.add(proc_task_type)
        self.stdout.write(self.style.SUCCESS("Successfully created Extra Fee Type objects."))
