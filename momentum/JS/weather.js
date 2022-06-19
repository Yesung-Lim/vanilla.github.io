const API_KEY = "afa4a8d5df3adcbd115a3115c79d102a";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#city");
            const weather = document.querySelector("#weather");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoFail() {
    alert("Can not find your position!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail);