const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')


mapboxgl.accessToken = "pk.eyJ1IjoibGlsbHlvaCIsImEiOiJjazV3cHB1a3gwMHZlM29yN3J6cjlxOWtxIn0.rKJNVJhadZ6cqy6Z-S5Tog";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker("activity", [-74.009, 40.705])
marker.addTo(map)
