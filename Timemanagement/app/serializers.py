from rest_framework import serializers
from .models import Task,User

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['TASK_ID','TASK_NAME','TASK_STATUS','START_TIME','END_TIME' ,'CREATED_DATE', 'APPROVAL_STATUS', 'ASSIGNED_MANAGER', 'TASK_DESCRIPTION']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['FULL_NAME','USER_NAME','USER_ID','IS_SUPERUSER','DEPARTMENT','DESIGNATION']