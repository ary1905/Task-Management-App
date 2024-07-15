from django.urls import path
from .views import GetFirstNameAPIView, GetEmailAPIView, TasksAPIView, AddTaskAPIView, DeleteTaskAPIView

urlpatterns = [
    path('api/get_first_name/', GetFirstNameAPIView.as_view(), name='get_first_name'),
    path('api/get_email/', GetEmailAPIView.as_view(), name='get_email'),
    path('api/get_tasks/', TasksAPIView.as_view(), name='get_tasks'),
    path('api/add_task/', AddTaskAPIView.as_view(), name='add_task'),
    path('api/delete_task/<int:task_id>/', DeleteTaskAPIView.as_view(), name='delete_task')
]

