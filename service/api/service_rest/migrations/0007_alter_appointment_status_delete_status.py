# Generated by Django 4.0.3 on 2023-10-26 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0006_alter_appointment_technician'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='status',
            field=models.CharField(default='CREATED', max_length=10),
        ),
        migrations.DeleteModel(
            name='Status',
        ),
    ]
