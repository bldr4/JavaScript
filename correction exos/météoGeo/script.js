let villeChoisie;
let watchId;

if ("geolocation" in navigator) {
  watchId = navigator.geolocation.watchPosition(async (position) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=303f9eec7635d278cf01f88380592743&units=metric`;
      const response = await axios.get(url);
      const temperature = response.data.main.temp;
      const tempMin = response.data.main.temp_min;
      const tempMax = response.data.main.temp_max;
      const ville = response.data.name;
      const icon = response.data.weather[0].icon; 
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      document.querySelector(".temperature_label").textContent = temperature;
      document.querySelector(".temperature_min").textContent = tempMin;
      document.querySelector(".temperature_max").textContent = tempMax;
      document.querySelector(".ville").textContent = ville;
      document.querySelector("#weather-icon").src = iconUrl; 
      document.querySelector("#weather-icon").alt = response.data.weather[0].description;
    } catch (error) {
      console.log(error);
      alert("Un problème est intervenu, merci de revenir plus tard.");
    }
  }, erreur, { enableHighAccuracy: true });
} else {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie);
}

// Gérer le changement de ville par l'utilisateur
let changerDeVille = document.querySelector(".changer");
changerDeVille.addEventListener("click", () => {
  villeChoisie = prompt("Quelle ville souhaitez-vous voir ?");
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null; 
  }
  recevoirTemperature(villeChoisie);
});

async function recevoirTemperature(ville) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric`;
    const response = await axios.get(url);
    const temperature = response.data.main.temp;
    const tempMin = response.data.main.temp_min;
    const tempMax = response.data.main.temp_max;
    const villeName = response.data.name;
    const icon = response.data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    document.querySelector(".temperature_label").textContent = temperature;
    document.querySelector(".temperature_min").textContent = tempMin;
    document.querySelector(".temperature_max").textContent = tempMax;
    document.querySelector(".ville").textContent = villeName;
    document.querySelector("#weather-icon").src = iconUrl;
    document.querySelector("#weather-icon").alt = response.data.weather[0].description;
  } catch (error) {
    console.log(error);
    alert("Un problème est intervenu, merci de revenir plus tard.");
  }
}

function erreur() {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie);
}
