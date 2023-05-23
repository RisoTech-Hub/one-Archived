from django.core.management.base import BaseCommand

from one.masterdata.installment.models import Installment, InstallmentLine


class Command(BaseCommand):
    help = "Create Installment objects"
    data = [
        {
            "code": "INS_FULL",
            "name": "Full",
            "items": [
                {"installment_number": 1, "percentage": 100},
            ],
        },
        {
            "code": "INS_HALF",
            "name": "Half",
            "items": [
                {"installment_number": 1, "percentage": 50},
                {"installment_number": 2, "percentage": 50},
            ],
        },
        {
            "code": "INS_STD",
            "name": "Standard 3",
            "items": [
                {"installment_number": 1, "percentage": 30},
                {"installment_number": 2, "percentage": 30},
                {"installment_number": 3, "percentage": 40},
            ],
        },
    ]

    def handle(self, *args, **options):
        for item in self.data:
            installment, created = Installment.objects.update_or_create(code=item["code"], name=item["name"])
            for installment_item in item["items"]:
                InstallmentLine.objects.update_or_create(
                    installment=installment,
                    installment_number=installment_item["installment_number"],
                    percentage=installment_item["percentage"],
                )
        self.stdout.write(self.style.SUCCESS("Successfully created Installment objects."))
