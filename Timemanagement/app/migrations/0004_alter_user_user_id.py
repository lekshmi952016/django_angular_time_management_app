# Generated by Django 4.1 on 2022-08-09 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='USER_ID',
            field=models.IntegerField(),
        ),
    ]
