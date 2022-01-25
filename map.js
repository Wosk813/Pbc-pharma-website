// Initialize and add the map
function initMap() {
    // The location of Uluru
    const zielona_gora = { lat: 51.937688328140005, lng: 15.505051361209757 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: zielona_gora,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: zielona_gora,
      map: map,
    });
  }