document.addEventListener('DOMContentLoaded', function () {
    var mapElement = document.getElementById('map-list');
    var talkDataElement = document.getElementById('outreach-data');

    if (mapElement && talkDataElement) {
        var locations = JSON.parse(talkDataElement.textContent.trim());

        if (locations.length > 0) {
            var map = L.map('map-list').setView([locations[0].lat, locations[0].lon], 4);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            var markers = [];
            locations.forEach(function(loc) {
                var marker = L.marker([loc.lat, loc.lon]).addTo(map);
                marker.bindPopup(`<b><a href="${loc.url}">${loc.title}</a></b><br>${loc.event}`);
                markers.push(marker);
            });

            var group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.5));
        } else {
            mapElement.style.display = 'none';
        }
    }
});
