# Generated by Django 4.1.4 on 2022-12-22 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ephemera', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='haiku',
            name='body',
            field=models.TextField(max_length=300),
        ),
        migrations.AlterField(
            model_name='haiku',
            name='created_on',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='haiku',
            name='title',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
