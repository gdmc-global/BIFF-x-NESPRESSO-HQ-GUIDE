// Renders small Leaflet maps inline inside a page section (venue.html,
// meal.html) — same self-hosted Leaflet + OpenStreetMap setup as the guest
// site's all-locations map, scaled down per section. Every pin opens the
// place directly in Google Maps.
(function () {
  function gmapsUrl(name, placeId) {
    var q = encodeURIComponent(name);
    var url = "https://www.google.com/maps/search/?api=1&query=" + q;
    if (placeId) url += "&query_place_id=" + placeId;
    return url;
  }

  function pinIcon(kind, label) {
    var cls = kind === "venue" ? "leaflet-pin--venue" : "leaflet-pin--meal";
    return L.divIcon({
      className: "",
      html: '<div class="leaflet-pin ' + cls + '"><span>' + label + "</span></div>",
      iconSize: [26, 26],
      iconAnchor: [13, 26],
      popupAnchor: [0, -24],
    });
  }

  // points: [{ kind: "venue" | "option", name, lat, lng, placeId, sub }]
  window.renderMiniMap = function (elId, points) {
    if (!window.L) return;
    var el = document.getElementById(elId);
    if (!el) return;

    var map = L.map(elId, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    var bounds = [];
    points.forEach(function (p, i) {
      var label = String(i + 1);
      var marker = L.marker([p.lat, p.lng], { icon: pinIcon(p.kind, label) }).addTo(map);
      var eyebrow = p.kind === "venue" ? "Venue" : "Option " + label;
      var popupHtml =
        '<p class="map-popup__eyebrow">' + eyebrow + (p.sub ? " · " + p.sub : "") + "</p>" +
        '<p class="map-popup__title">' + p.name + "</p>" +
        '<a class="map-popup__link" href="' + gmapsUrl(p.name, p.placeId) + '" target="_blank" rel="noopener">Open in Google Maps &#8594;</a>';
      marker.bindPopup(popupHtml);
      bounds.push([p.lat, p.lng]);
    });

    if (bounds.length) map.fitBounds(bounds, { padding: [28, 28] });
    map.on("focus", function () { map.scrollWheelZoom.enable(); });
    map.on("blur", function () { map.scrollWheelZoom.disable(); });
  };
})();
