let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const map = await new google.maps.Map(document.getElementById('map'), {
    center: { lat: 28.610705179904404, lng: 77.03784507445944 },
    zoom: 0 ,
    mapId: 'd11aa134de0941b6',
    
    restriction: {
      latLngBounds: {
        north: 28.614295745082604,
        south: 28.607718583952266,
        east: 77.04315419816415,
        west: 77.03416466130932
      },
      // strictBounds: true
    }

  });
  

  const maingate =  new google.maps.Marker({
    map,
    position: {lat: 28.6084357370824, lng: 77.03528351042257},
    title:"Main gate",
    

    icon: {
      url:"maingate.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  }
  );

  const infowindow = new google.maps.InfoWindow({
    content: "This is NSUT",
    ariaLabel: "Uluru",
  });

  maingate.addListener("click", () => {
    infowindow.open({
      anchor: maingate,
      map,
    });
  });

  const apj = new google.maps.Marker({
    map,
    position: { lat: 28.61201367607799, lng: 77.03700778205938},
    
    title:"apj",


    icon: {
      url:"apj.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });

  const infowindow2 = new google.maps.InfoWindow({
    content: "APJ",
    ariaLabel: "Uluru",
  });

  apj.addListener("click", () => {
    infowindow2.open({
      anchor: apj,
      map,
    });
  });

  const block4 = new google.maps.Marker({
    map,
    position: {lat: 28.609472946856194, lng: 77.0377203483297},
    
    title:"block 4",


    icon: {
      url:"block4.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });

  const infowindow3 = new google.maps.InfoWindow({
    content: "block 4",
  });

  block4.addListener("click", () => {
    infowindow3.open({
      anchor: block4,
      map,
    });
  });

  const block5 = new google.maps.Marker({
    map,
    position: {lat: 28.609692555450447, lng: 77.03857685551428},
    
    title:"block 5",


    icon: {
      url:"block5.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });

  const infowindow4 = new google.maps.InfoWindow({
    content: "5th Block",
  });

  block5.addListener("click", () => {
    infowindow4.open({
      anchor: block5,
      map,
    });
  });

  const sblock = new google.maps.Marker({
    map,
    position: {lat: 28.612039686606746, lng: 77.03769811607225},
    
    title:"sblock",


    icon: {
      url:"sblock.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });

  const infowindow5 = new google.maps.InfoWindow({
    content: "s block",
  });

  sblock.addListener("click", () => {
    infowindow5.open({
      anchor: sblock,
      map,
    });
  });

  const clinic = new google.maps.Marker({
    map,
    position: {lat: 28.611685305047505, lng: 77.03855732374859},
    
    title:"clinic",


    icon: {
      url:"clinic.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });

  const infowindow6 = new google.maps.InfoWindow({
    content: "Clinic",
  });

  clinic.addListener("click", () => {
    infowindow6.open({
      anchor: clinic,
      map,
    });
  });

  const block6 = new google.maps.Marker({
    map,
    position: {lat: 28.61052674251005, lng: 77.03785599122436},
    
    title:"block 6",


    icon: {
      url:"block6.svg",
      scaledSize: new google.maps.Size(150,80)
    }
  });
  
  
  const infowindow7 = new google.maps.InfoWindow({
    content: "block 6",
  });
  
  block6.addListener("click", () => {
    infowindow7.open({
      anchor: block6,
      map,
    });
  });
}


initMap();

var reqCount =0

navigator.geolocation.watchPosition(successCallback, errorCallback, options);
function successCallback(position) {
  reqCount++
  const {accuracy, latitude, longitude, altitude, heading, speed} = position.coords

  console.log("accuracy ", accuracy, " latiude: ",latitude, "longitude: ", longitude, " altitude: ", altitude, "heading: ", heading, " speed: ", speed)

}

function errorCallback(error) {
  
}

var options = {
  enableHighAccuracy: false,
  timeOut: 5000,
  maximumAge: 0
}