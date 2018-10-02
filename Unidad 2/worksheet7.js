// W7

document.write('<h1>Worksheet 7</h1>');

// Optionals

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


// Current Position

function success(pos){
    let coordinates = pos.coords;
    
    console.log('Your current position is:');
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
}

var locat = navigator.geolocation.getCurrentPosition(success, error, [options]);


// Watch Position

function successW(posM) {
    let coordinates = posM.coords;

    console.log('Your current position is, until you move:');
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
  
    if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
        console.log('Congratulation, you reach the target');
        navigator.geolocation.clearWatch(id);
    }
};

var move = navigator.geolocation.watchPosition(successW, error, [options]);