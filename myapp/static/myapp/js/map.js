// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initAutocomplete() {
  
  var myCenter = new google.maps.LatLng(14.467354, 78.824134);

  
  var mapOptions = {center: myCenter, zoom: 5, mapTypeId:google.maps.MapTypeId.HYBRID};
  var mapCanvas = document.getElementById("map");
  
  var map = new google.maps.Map(mapCanvas,mapOptions);
var map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 14.826427,lng: 77.889025},
    zoom: 8,
  mapTypeId: google.maps.MapTypeId.HYBRID
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

  
  var marker1 = new google.maps.Marker({position:sensor1, map: map, id:"marker1"} );
   var marker2 = new google.maps.Marker({position:sensor2, map: map, id:"marker2"} );
   var marker3 = new google.maps.Marker({position:sensor3, map: map, id:"marker3"} );
   var marker4 = new google.maps.Marker({position:sensor4, map: map, id:"marker4"} );
  var marker5 = new google.maps.Marker({position:sensor5, map: map, id:"marker5"} );
   var marker6 = new google.maps.Marker({position:sensor6, map: map, id:"marke6r"} );
  var marker7 = new google.maps.Marker({position:sensor7, map: map, id:"marker7"} );
 var marker8 = new google.maps.Marker({position:sensor8, map: map, id:"marker8"} );
 var marker9 = new google.maps.Marker({position:sensor9, map: map, id:"marker9"} );
var marker10 = new google.maps.Marker({position:sensor10, map: map, id:"marker10"} );
var marker11 = new google.maps.Marker({position:sensor11, map: map, id:"marker11"} );
var marker12 = new google.maps.Marker({position:sensor12, map: map, id:"marker12"} );
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
 var info9 = new google.maps.InfoWindow({content: "Sensor8"});
 var info9 = new google.maps.InfoWindow({content: "Sensor8"});
 var info10 = new google.maps.InfoWindow({content: "Sensor8"});
 var info11 = new google.maps.InfoWindow({content: "Sensor8"});  
 var info12 = new google.maps.InfoWindow({content: "Sensor8"});
/*                                          
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
*/



  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);




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
    }

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
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

$(document).ready(function() {
$("#pac-input").css("z-index", "5");
$("#pac-input").css("position", "fixed");
$("#pac-input").css("left", "5px");
$("#pac-input").css("top", "5px"); 



});







 