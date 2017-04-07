"""myproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from myapp.views import current_datetime
import myapp
import os.path

'''urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^hello/','myapp.views.hello',name='hello'),
]'''

urlpatterns =[
   #Examples
   #url(r'^$', 'myproject.view.home', name = 'home'),
   #url(r'^blog/', include('blog.urls')),


   url(r'^admin/', admin.site.urls),
   #url(r'^sarvani/', myapp.views.DateShowView.as_view()),
   url(r'^iot/', myapp.views.IOT.as_view()),
   #url(r'^sarvani/',myapp.views.current_datetime),
   url(r'^time/plus/(\d{1,2})/$', myapp.views.hours_ahead),
   #url to store the sensor data to database
   url(r'^(?P<name>\w+)/(?P<value>[0-9]+)/$',myapp.views.index),

    url(r'^(?P<group>\w+)/(?P<name>\w+)/(?P<value>[0-9]+)/$',myapp.views.index2),

   url(r'^sensors/',myapp.views.allsensors),

   url(r'^sensor/',myapp.views.sensors),
   url(r'^previous/',myapp.views.previous),
   url(r'^analytics/',myapp.views.multi),

   url(r'^live/',myapp.views.live),
   url(r'^livemap/',myapp.views.livemap),
  ]
