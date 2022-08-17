from django.shortcuts import render
from rest_framework import viewsets
from.models import *
from .serializers import *

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    queryset= Task.objects.all()
    serializer_class = TaskSerializer

class UserView(viewsets.ModelViewSet):
    queryset= User.objects.all()
    serializer_class = UserSerializer