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

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.1512198, lng: -3.6167244999999997},
        zoom: 16
    });

    var coordsDiv = document.getElementById('coords');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
    map.addListener('mousemove', function(event) {
        console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
    });
        
    var myLatLng = {lat: 37.1512198, lng: -3.6167244999999997};


    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'MI CHABOLO'
    });

}

// Current Position

// function success(pos){
//     let coordinates = pos.coords;
    
//     console.log('Your current position is:');
//     console.log(`Latitude : ${coordinates.latitude}`);
//     console.log(`Longitude: ${coordinates.longitude}`);
//     console.log(`More or less ${coordinates.accuracy} meters.`);

//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: coordinates.latitude, lng: coordinates.longitude},
//         zoom: 16
//     });

//     var coordsDiv = document.getElementById('coords');
//     map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
//     map.addListener('mousemove', function(event) {
//         console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
//     });
        
//     var myLatLng = {lat: 37.1512198, lng: -3.6167244999999997};

//     var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         title: 'MI CHABOLO'
//     });

// }

// var locat = navigator.geolocation.getCurrentPosition(success, error, [options]);


// Watch Position

function successW(posM) {
    let coordinates = posM.coords;

    console.log('Your current position is, until you move:');
    console.log(`Latitude : ${coordinates.latitude}`);
    console.log(`Longitude: ${coordinates.longitude}`);
    console.log(`More or less ${coordinates.accuracy} meters.`);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: coordinates.latitude, lng: coordinates.longitude},
        zoom: 16
    });

    var coordsDiv = document.getElementById('coords');
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(coordsDiv);
    map.addListener('mousemove', function(event) {
        console.log(coordsDiv = 'lat: ' + event.latLng.lat() + ', lng: ' + event.latLng.lng());
    });

    var myLatLng = {lat: 37.1484704, lng: -3.6167965};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'MI CHABOLO'
    });
};

function mapCharged(){
    var move = navigator.geolocation.watchPosition(successW, error, [options]);
}