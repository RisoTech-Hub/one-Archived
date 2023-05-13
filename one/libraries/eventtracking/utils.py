from diff_match_patch import diff_match_patch
from django.db.models import (
    AutoField,
    BigAutoField,
    BigIntegerField,
    BinaryField,
    BooleanField,
    CharField,
    DateField,
    DateTimeField,
    DecimalField,
    DurationField,
    EmailField,
    FileField,
    FilePathField,
    FloatField,
    ForeignKey,
    ImageField,
    IntegerField,
    ManyToManyField,
    NullBooleanField,
    OneToOneField,
    PositiveIntegerField,
    PositiveSmallIntegerField,
    SmallIntegerField,
    TextField,
    URLField,
    UUIDField,
)


def get_field_diff(old_value, new_value):
    dmp = diff_match_patch()
    diffs = dmp.diff_main(old_value, new_value)
    dmp.diff_cleanupSemantic(diffs)
    return dmp.diff_prettyHtml(diffs)


def format_field_value(field, value):
    if isinstance(field, (BooleanField, NullBooleanField)):
        return "No" if not value else "Yes"
    elif isinstance(
        field,
        (
            DecimalField,
            FloatField,
            IntegerField,
            PositiveIntegerField,
            PositiveSmallIntegerField,
            SmallIntegerField,
            BigIntegerField,
            BinaryField,
        ),
    ):
        return str(value)
    elif isinstance(field, DateField):
        return value.strftime("%Y-%m-%d") if value else ""
    elif isinstance(field, (DateTimeField, DurationField)):
        return value.strftime("%Y-%m-%d %H:%M:%S") if value else ""
    elif isinstance(field, (EmailField, URLField, FilePathField, CharField, TextField, UUIDField)):
        return value
    elif isinstance(field, (ImageField, FileField)):
        return value.url if value else ""
    elif isinstance(field, (AutoField, BigAutoField)):
        return str(value)
    elif isinstance(field, (OneToOneField, ForeignKey)):
        return field.related_model.objects.filter(pk=value).first().__str__() if value else ""
    elif isinstance(field, ManyToManyField):
        return list(value.values_list("pk", flat=True)) if value else ""
    else:
        return ""
