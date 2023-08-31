var reqCount =0


function successCallback(position) {
  reqCount++
  const {accuracy, latitude, longitude, altitude, heading, speed} = position.coords

  console.log("accuracy ", accuracy, " latiude: ",latitude, "longitude: ", longitude, " altitude: ", altitude, "heading: ", heading, " speed: ", speed)


  const regionBounds = L.latLngBounds(
  [[28.61599,77.03292], [28.60558,77.04266]]
);


const map = L.map('map', {
  maxBounds: L.latLngBounds(
    [[28.61599,77.03292], [28.60558,77.04266]]
  ),  
  maxBoundsViscosity: 2,
  minZoom:16.4,  
  // maxZoom: 25
}).fitBounds(regionBounds);

// var map = L.map('map').setView([51.505, -0.09], 20);

  // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //   L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    
  // }).addTo(map);


  L.marker([latitude, longitude]).addTo(map)
      .bindPopup('That\'s my location ')
      .openPopup();

      // const imageBounds = [[28.61599,77.03292], [28.60558,77.04266]];
      const imageBounds = [[28.61601231410319, 77.02660944980602], [28.60585675716733, 77.04876803378558]]
      // var RMI = "map2.png"
      var RMI = "MapUIBuild.png"
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