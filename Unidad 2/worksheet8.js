// W8

document.write("<h1>Worksheet 8</h1>");

var video = document.getElementById("videoElement");
var audio = document.getElementById("audioElement");

// Video HTML5

if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({video: true})
  .then(function(stream) {
    video.srcObject = stream;
    console.warn("Video Working");
  })
  .catch(function(error) {
    console.warn("Video Error");
  });
}

// Audio HTML5

if (navigator.mediaDevices.getUserMedia) {       
    navigator.mediaDevices.getUserMedia({audio: true})
  .then(function(stream) {
    audio.srcObject = stream;
    console.warn("Audio Working");
  })
  .catch(function(error) {
    console.warn("Audio Error");
  });
} 