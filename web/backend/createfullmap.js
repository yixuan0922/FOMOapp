function createmap(lat, long) {
  const map = new mapboxgl.Map({
    container: "map",
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12",
    center: [long, lat], // Use lat and long as the center coordinates
    zoom: 14,
  });
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    })
  );
  return map;
}



function createfullmap(){
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    createmap(lat, long); // Pass lat and long as arguments
  });
}

export function createfullmap();