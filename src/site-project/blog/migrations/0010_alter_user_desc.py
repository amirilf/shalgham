# Generated by Django 3.2 on 2021-09-11 11:56

import ckeditor.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0009_auto_20210911_1358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='desc',
            field=ckeditor.fields.RichTextField(null=True),
        ),
    ]