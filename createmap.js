function createmap(){
    const map = new mapboxgl.Map({
        container: "map",
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: "mapbox://styles/mapbox/streets-v12",
        center: [103.802719, 1.35658],
        zoom: 14,
      });
      return map;
}

export function createmap();