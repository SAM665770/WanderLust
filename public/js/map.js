Radar.initialize(mapToken);

const map = Radar.ui.map({
  container: "map", // OR document.getElementById('map')
  style: "radar-default-v1",
  center: listing.geometry.coordinates, // Starting position[longitude, latitude]
  zoom: 7,
});

const marker = Radar.ui
  .marker({
    color: "#000257",
    width: 40,
    height: 80,
    popup: {
      text: "My popup.",
    },
  })
  .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinate
  .addTo(map);

const popup = Radar.ui
  .popup({
    text: "Exact Location provided after booking",
  })
  .setLngLat(listing.geometry.coordinates)
  .addTo(map);
