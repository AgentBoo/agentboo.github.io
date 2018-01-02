// switch between map and kanban
const map = document.getElementById('map')
const kan = document.getElementById('kanban')

const mapBtn = document.querySelector('.map')
const kanBtn = document.querySelector('.kanban')

mapBtn.addEventListener('click', function(_event){
  if(!map.style.display){
    kan.style.display = "";
    map.style.display = 'block';
  } else {
    map.style.display = "block"
    kan.style.display = ""
  }
})

kanBtn.addEventListener('click', function(_event){
  if(map.style.display){
    map.style.display = 'none';
    kan.style.display = 'block'
  } else {
    map.style.display = 'none';
    kan.style.display = 'block'
  }
})

// gmaps copy pasta
// https://developers.google.com/maps/documentation/javascript/marker-clustering
function initMap() {

     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 4,
      // Pearings Indianapolis
       center: {lat:39.76746259999999, lng:-86.15861430000001},
       zoomControl: true,
       mapTypeControl: false,
       scaleControl: false,
       streetViewControl: true,
       rotateControl: false,
       fullscreenControl: false
     });

     // Create an array of alphabetical characters used to label the markers.
     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

     // Add some markers to the map.
     // Note: The code uses the JavaScript Array.prototype.map() method to
     // create an array of markers based on a given "locations" array.
     // The map() method here has nothing to do with the Google Maps API.
     var markers = locations.map(function(location, i) {
       return new google.maps.Marker({
         position: location,
         label: labels[i % labels.length]
       });
     });

     // Add a marker clusterer to manage the markers.
     var markerCluster = new MarkerClusterer(map, markers,
         {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
   }

   var locations = [
       {lat:39.8106131, lng:-86.15789159999997},
       {lat:39.8338133, lng:-86.18536280000001},
       {lat:39.9088713, lng:-86.1959319},
       {lat:39.8346569, lng:-86.13585269999999},
       {lat:39.76946390000001, lng:-86.15943119999997},
       {lat:39.7658692, lng:-86.15778219999999},
       {lat:39.1650708, lng:-86.5182805},
       {lat:39.16609, lng:-86.5265478},
       {lat:39.7902783, lng:-86.1641085},
       {lat:40.4282112, lng:-86.91439509999998},
       {lat:39.76746259999999, lng:-86.15861430000001},
       {lat:40.4282112, lng:-86.91439509999998},
       {lat:40.4250854, lng:-86.90815599999996},
       {lat:40.3990366, lng:-86.83701980000001},
       {lat:40.4189725, lng:-86.885672},
       {lat:47.670328, lng:-122.38630979999999},
       {lat:47.6301009, lng:-122.29454759999999},
       {lat:40.8615547, lng:-73.88078089999999}
   ]
