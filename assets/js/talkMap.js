var mapElement = document.getElementById('map');
if (mapElement) {
    var lat = parseFloat(mapElement.dataset.lat);
    var lon = parseFloat(mapElement.dataset.lon);
    var eventName = mapElement.dataset.event;
    var locationName = mapElement.dataset.locationName;

    var map = L.map('map').setView([lat, lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("<b>" + eventName + "</b><br>" + locationName).openPopup();
} 