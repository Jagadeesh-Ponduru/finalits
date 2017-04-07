from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

from .models import Sensor

# Create your views here.
import datetime
import sqlite3




def current_datetime(request):
 now = datetime.datetime.now()
 html = "<html><body>It is now %s.</body></html>" % now
 return HttpResponse(html)


def hours_ahead(request, offset):
 offset = int(offset)
 dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
 html = "<html><body>In %s hour(s), it will be %s.</body></html>" % (offset, dt)
 return HttpResponse(html)


class IOT(TemplateView):
	template_name = "myapp/header_first.html"

def get_context_data(self, **kwargs):
	context= super(IOT, self).get_context_data(**kwargs)
	context = {'name':["Sarvani", "pranavi"]}
	return context


def index2(request,group,name,value):
	temp_sen_data = Sensorgroup2()

	temp_sen_data.Sensorgroup2_name = name
	temp_sen_data.Sensorgroup2_value = value
	temp_sen_data.save()


def allsensors(request):
    sensors = Sensor.objects.all()
    count = Sensor.objects.count()


    context  = {
        "sensors":sensors,"count":range(count),
    }
    return render(request,"myapp/sensor_data.html",context)

def sensors(request):
    sensors = Sensor.objects.all()
    count = Sensor.objects.count()

    context  = {
        "sensors":sensors,"count":range(count),
    }
    return render(request,"myapp/sensors.html",context)


def previous(request):
    #sensors = Sensor.objects.all().filter(Sensor.Sensor_date > "March 27, 2017, 11:57 a.m.")
    sensors1 = Sensor.objects.filter(Sensor_date__gte = '2016-03-29 11:58')
    count1 = Sensor.objects.filter(Sensor_date__gte = '2016-03-29 11:58').count()

    sensors2 = Sensor.objects.filter(Sensor_date__gte = '2016-10-01 11:58')
    count2 = Sensor.objects.filter(Sensor_date__gte = '2016-10-01 11:58').count()

    sensors3 = Sensor.objects.filter(Sensor_date__gte = '2017-01-01 11:58')
    count3 = Sensor.objects.filter(Sensor_date__gte = '2017-01-01 11:58').count()

    sensors4 = Sensor.objects.filter(Sensor_date__gte = '2017-02-28 11:58')
    count4 = Sensor.objects.filter(Sensor_date__gte = '2017-02-28 11:58').count()

    sensors = Sensor.objects.filter(Sensor_date__gte = '2017-03-27 11:58')
    count = Sensor.objects.filter(Sensor_date__gte = '2017-03-27 11:58').count()

    context  = {
        "sensors1":sensors,"count1":range(count1),"sensors2":sensors,"count2":range(count2),"sensors3":sensors,"count3":range(count3),"sensors4":sensors,"count4":range(count4),"sensors":sensors,"count":range(count),
    }
    return render(request,"myapp/previous_data.html",context)



def multi(request):

    if request.method == 'POST':
        low = request.POST['low']
        high = request.POST['high']
    else:
        low='50'
        high='60'


    #sensors = Sensor.objects.all().filter(Sensor.Sensor_date > "March 27, 2017, 11:57 a.m.")
    sensors1 = Sensor.objects.filter(Sensor_value__lt = low)
    count1 = Sensor.objects.filter(Sensor_value__lt = low).count()
    sensors2 = Sensor.objects.filter(Sensor_value__gte = low,Sensor_value__lte = high)
    count2 = Sensor.objects.filter(Sensor_value__gte = low,Sensor_value__lte = high).count()
    sensors3 = Sensor.objects.filter(Sensor_value__gt = high)
    count3 = Sensor.objects.filter(Sensor_value__gt = high).count()

    context  = {
        "sensors1":sensors1,"count1":range(count1),"sensors2":sensors2,"count2":range(count2),"sensors3":sensors3,"count3":range(count3),'low':low,'high':high,

    }
    return render(request,"myapp/new_multi_data.html",context)

def  live(request):
        sensors1=Sensor.objects.all()
        count = Sensor.objects.all().count()

        sensors=sensors1.reverse()[count-1:]
        sensors2=sensors1.reverse()[count-5:]
        context  = {
        "sensors":sensors,"sensors2":sensors2,
        }
        return render(request,"myapp/live_data.html",context)

def  livemap(request):
        sensors1=Sensor.objects.all()
        count = Sensor.objects.all().count()

        sensors=sensors1.reverse()[count-1:]
        sensors2=sensors1.reverse()[count-5:]
        context  = {
        "sensors":sensors,"sensors2":sensors2,
        }
        return render(request,"myapp/live_map.html",context)


def index(request,name,value):

	temp_sen_data = Sensor()
	temp_sen_data.Sensor_name = name
	temp_sen_data.Sensor_value = value
	temp_sen_data.save()
	return HttpResponse("<h3>the data is entered</h3>")
