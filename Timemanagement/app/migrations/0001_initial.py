# Generated by Django 4.1 on 2022-08-08 20:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_name', models.CharField(max_length=250)),
                ('task_id', models.IntegerField()),
                ('task_status', models.CharField(max_length=250)),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('created_date', models.DateField()),
                ('approval_status', models.CharField(max_length=100)),
                ('assigned_manager', models.CharField(max_length=300)),
                ('task_description', models.CharField(max_length=300)),
            ],
        ),
    ]
