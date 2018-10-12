// Initialize map with lat: 0, lon: 0 and zoom level 3
var map = L.map('map').setView([0, 0], 3);

// Draw tile layer (the map imagery) from Mapbox
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWJoaWppdHBhcmlkYSIsImEiOiJjam41dXE4bTgybHY3M2twbHAxajUybDFwIn0.vNbWsHw21X9yDTZ3n8xy_g'
}).addTo(map);

// Center on user's geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    map.setView([latitude, longitude], 3);
  });
}

// Read user data from hacktobermap.js and render markers
for (var i = 0; i < hacktobermap.length; i++) {
  var name = hacktobermap[i].name;
  var locality = hacktobermap[i].location;
  var latitude = hacktobermap[i].latitude;
  var longitude = hacktobermap[i].longitude;
  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup('<b>' + name + '</b><br>' + locality)
    .openPopup();
}
