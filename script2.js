var reqCount =0


function successCallback(position) {
  reqCount++
  const {accuracy, latitude, longitude, altitude, heading, speed} = position.coords

  console.log("accuracy ", accuracy, " latiude: ",latitude, "longitude: ", longitude, " altitude: ", altitude, "heading: ", heading, " speed: ", speed)


  const regionBounds = L.latLngBounds(
  [[28.61599,77.03292], [28.60558,77.04266]]
);


const map = L.map('map', {
  maxBounds: regionBounds,
  maxBoundsViscosity: 2,
  minZoom:16.4,  
}).fitBounds(regionBounds);


  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    
  }).addTo(map);
  L.marker([latitude, longitude]).addTo(map)
      .bindPopup('That\'s my location ')
      .openPopup();

      const imageBounds = [[28.61599,77.03292], [28.60558,77.04266]];
      var RMI = "map2.png"
      L.imageOverlay(RMI, imageBounds).addTo(map)


}

function errorCallback(error) {
  
}

var options = {
  enableHighAccuracy: false,
  timeOut: 5000,
  maximumAge: 0
}












navigator.geolocation.watchPosition(successCallback, errorCallback, options);