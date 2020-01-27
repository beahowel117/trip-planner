const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


const buildMarker = (type, coords) => {
if(type === "hotels"){
  const marker = document.createElement("div");
  marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
  new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
  }
if(type === "restaurants"){
  const marker = document.createElement("div");
  marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
  }
if(type === "activity"){
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
  new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
  }
}

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009151, 40.705086]).addTo(map);

const markerDomChi = document.createElement("div");
markerDomChi.style.width = "32px";
markerDomChi.style.height = "39px";
markerDomChi.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomChi).setLngLat([-87.641, 41.895]).addTo(map);

module.exports = buildMarker;
