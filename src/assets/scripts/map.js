// initialize the map on the "map" div with a given center and zoom
var map = L.map("map", {
  center: [41.3876, 2.17539], // Latitude, Longitude
  zoom: 13, // Zoom on the map
  scrollWheelZoom: false, // Disables scrolling to allow user to scroll down more easily
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([41.3876, 2.17539])
  .addTo(map)
  .bindPopup("Palau de la Música") // Name of the marker of the map
  .openPopup();
