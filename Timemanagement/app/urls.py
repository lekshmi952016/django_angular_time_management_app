from django.urls import path
from . import views

urlpatterns = [
    path('tasks',views.TaskView.as_view(), name='tasks'),
    path('users',views.UserView.as_view(), name='users')
]
