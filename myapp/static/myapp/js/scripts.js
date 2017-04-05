
$(document).ready(function() {


  

  

var i=0;
var p=0;

 
/*function myMap() {
  
  var a = new google.maps.LatLng(13.579245, 80.041065);
  var b = new google.maps.LatLng(13.576492, 80.024070);
  var c = new google.maps.LatLng(13.565812, 80.023040);
  var d = new google.maps.LatLng(13.553296, 80.007247);
  var e = new google.maps.LatLng(13.556300, 79.982185);
  var f = new google.maps.LatLng(13.543617, 79.986648);
  var g = new google.maps.LatLng(13.535273, 79.985103);
  var h = new google.maps.LatLng(13.535940, 79.978580);
  var i = new google.maps.LatLng(13.528263, 79.977893);
  var j = new google.maps.LatLng(13.525760, 79.969482);
  var k = new google.maps.LatLng(13.519751, 79.968108);
  var l = new google.maps.LatLng(13.518416, 79.961929);
  var m = new google.maps.LatLng(13.513575, 79.967250);
  var n = new google.maps.LatLng(13.513575, 79.967250);
  var o = new google.maps.LatLng(13.511573, 79.979438);
  var p = new google.maps.LatLng(13.505898, 79.984588);
  var q = new google.maps.LatLng(13.515745, 79.989051);
  
  var r = new google.maps.LatLng(13.518249, 80.000724);
  var s = new google.maps.LatLng(13.503561, 80.006046);
  var t = new google.maps.LatLng(13.498219, 80.014285);
  var u = new google.maps.LatLng(13.498052, 80.029392);
  var v = new google.maps.LatLng(13.495716, 80.045871);
  var w = new google.maps.LatLng(13.511739, 80.048274);
  var x = new google.maps.LatLng(13.521086, 80.018234);
  var y = new google.maps.LatLng(13.527762, 80.017375);
  var z = new google.maps.LatLng(13.526761, 80.008106);
  var a1 = new google.maps.LatLng(13.520752, 80.005016);
  var a2 = new google.maps.LatLng(13.527095, 80.001582);
  var a3 = new google.maps.LatLng(13.541781, 80.001411);
  var a4 = new google.maps.LatLng(13.546788, 80.019779);
  var a5 = new google.maps.LatLng(13.540279, 80.026817);
  var a6 = new google.maps.LatLng(13.536441, 80.039691);
  var a7 = new google.maps.LatLng(13.562642, 80.049476);
  
  var myCenter = new google.maps.LatLng(14.467354, 78.824134);

  
  var mapOptions = {center: myCenter, zoom: 8, mapTypeId:google.maps.MapTypeId.HYBRID};
  var mapCanvas = document.getElementById("map");
  
  var map = new google.maps.Map(mapCanvas,mapOptions);

  var flightPath = new google.maps.Polygon({
    path: [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,a1,a2,a3,a4,a5,a6,a7],
    strokeColor: "pink",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "pink",
    fillOpacity: 0.4
  });
 
  
 var sensor1 = new google.maps.LatLng(13.05807473, 80.2331543);
  var sensor2 = new google.maps.LatLng(13.530389, 79.997847);
  var sensor3 = new google.maps.LatLng(14.38147628, 79.99145508);
  var sensor4 = new google.maps.LatLng(12.916517, 79.132499);
  var sensor5 = new google.maps.LatLng(13.560349, 78.503606);
   var sensor6 = new google.maps.LatLng(14.467354, 78.824134);
   var sensor7 = new google.maps.LatLng(14.64736838, 77.60742188);
   var sensor8 = new google.maps.LatLng(12.90819811, 77.59643555);
var sensor9 = new google.maps.LatLng(15.828126, 78.037279);
var sensor10 = new google.maps.LatLng(13.549485, 79.999394);
var sensor11 = new google.maps.LatLng(13.554658, 80.027375);
var sensor12 = new google.maps.LatLng(13.521676, 79.999180);

  
  var marker1 = new google.maps.Marker({position:sensor1, map: map} );
   var marker2 = new google.maps.Marker({position:sensor2, map: map} );
   var marker3 = new google.maps.Marker({position:sensor3, map: map} );
   var marker4 = new google.maps.Marker({position:sensor4, map: map} );
  var marker5 = new google.maps.Marker({position:sensor5, map: map} );
   var marker6 = new google.maps.Marker({position:sensor6, map: map} );
  var marker7 = new google.maps.Marker({position:sensor7, map: map} );
 var marker8 = new google.maps.Marker({position:sensor8, map: map} );
 var marker9 = new google.maps.Marker({position:sensor9, map: map} );
var marker10 = new google.maps.Marker({position:sensor10, map: map} );
var marker11 = new google.maps.Marker({position:sensor11, map: map} );
var marker12 = new google.maps.Marker({position:sensor12, map: map} );
  //marker.setMap(map);
  marker1.setMap(map);
  marker2.setMap(map);
  marker3.setMap(map);
  marker4.setMap(map);
   marker5.setMap(map);	
   marker6.setMap(map);
 marker7.setMap(map);
 marker8.setMap(map);
marker9.setMap(map);
marker10.setMap(map);
marker11.setMap(map);
marker12.setMap(map);
 var info1 = new google.maps.InfoWindow();
 var info2 = new google.maps.InfoWindow({ content: "Sensor2" });
 var info3 = new google.maps.InfoWindow({content: "Sensor3"});
 var info4 = new google.maps.InfoWindow({content: "Sensor4"});
  var info5 = new google.maps.InfoWindow({content: "Sensor5"});       
var info6 = new google.maps.InfoWindow({content: "Sensor6"});  
var info7 = new google.maps.InfoWindow({content: "Sensor7"}); 

 var info8 = new google.maps.InfoWindow({content: "Sensor8"});  
                                          
info1.open(map,marker1);
info2.open(map,marker2);
info3.open(map,marker3);
info4.open(map,marker4);
info5.open(map,marker5);
info6.open(map,marker6);
info7.open(map,marker7);
info8.open(map,marker8);
info9.open(map,marker9);
info10.open(map,marker10);
info11.open(map,marker11);
info12.open(map,marker12);
};


myMap();*/

/*var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


function initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

//initAutocomplete();
  // Create the search box and link it to the UI element.
  //var input = document.getElementById('pac-input');
  //var searchBox = new google.maps.places.SearchBox(input);
 // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
            searchBox.setBounds(map.getBounds());
          });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          };

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();

          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
              }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
                  bounds.union(place.geometry.viewport);
              } 
                
              else {
              bounds.extend(place.geometry.location);
              }
          });

          map.fitBounds(bounds);
  });*/



});
