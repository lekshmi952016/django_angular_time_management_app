from pickle import TRUE
from django.db import models

# Create your models here.
class Task(models.Model):
    
    TASK_ID= models.IntegerField(primary_key=True)
    TASK_NAME = models.CharField(max_length=250)
    TASK_STATUS = models.CharField(max_length=250)
    START_TIME = models.TimeField()
    END_TIME = models.TimeField()
    CREATED_DATE = models.DateField()
    APPROVAL_STATUS = models.CharField(max_length=100,null=True,blank=True)
    ASSIGNED_MANAGER = models.CharField(max_length=300)
    TASK_DESCRIPTION = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.TASK_NAME

class User(models.Model):
    FULL_NAME= models.CharField(max_length=100)
    USER_NAME= models.CharField(max_length=100)
    USER_ID=models.IntegerField()
    IS_SUPERUSER=models.CharField(max_length=100)
    DEPARTMENT=models.CharField(max_length=100)
    DESIGNATION=models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.USER_NAME