// test accès caméra
// Prefer camera resolution nearest to 1280x720.
const constraints = { 
    audio: false, 
    video: true 
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
    const video = document.querySelector("#video");
    video.srcObject = mediaStream;
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  })


//   Test partage d'écran 
const startBtn = document.querySelector("#start");
const share = document.querySelector("#share");
let captureStream;

startBtn.addEventListener("click", async() => {
    try{
        captureStream =
        await navigator.mediaDevices.getDisplayMedia({video: true});
        share.srcObject = captureStream;
    }catch(e){
        console.error("Erreur lors du partage d'écran", e);
    }
})


// Test de géolocalisation 

window.navigator.geolocation.getCurrentPosition(function(position){
    console.log("latitude", position.coords.latitude, "longitude", position.coords.longitude);
});