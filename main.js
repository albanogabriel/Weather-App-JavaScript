const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "4c9aeff976665d929baf048517fb66b3";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(searchBoxValue){
    const response = await fetch(apiUrl + searchBoxValue + `&appid=${apiKey}`)
    
    if (response.status == 404){
        document.querySelector(".weather").style.display = "none"
        document.querySelector(".error").style.display = "block"
    } else {
        var data = await response.json();
        console.log(data)

        document.querySelector(".city").textContent = data.name 
        document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°c"
        document.querySelector(".humidity").textContent = data.main.humidity + "%"
        document.querySelector(".wind").textContent = data.wind.speed + "km/h"

        //update the images according to the weather conditions ( altera as imagens de acordo com as condições climáticas)

        const weatherIcon = document.querySelector(".weather-icon")
        console.log(weatherIcon)

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        } else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images/thunderstorm.png"
        }

        document.querySelector(".weather").style.display = "block"    
        document.querySelector(".error").style.display = "none"    
            
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})