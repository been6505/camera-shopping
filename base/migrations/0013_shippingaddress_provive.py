# Generated by Django 4.1.7 on 2023-08-02 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_rename_address_shippingaddress_addressline1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shippingaddress',
            name='provive',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
