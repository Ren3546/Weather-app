let submitBut = document.getElementById(`submit`)
let formCity = document.getElementById(`form`)
let cityName;
let cityList = document.getElementById(`cityList`)
let cityLat;
let cityLong;

function cityWeather() {
    

    let cityWeUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${window.cityLat}&lon=${window.cityLong}&units=metric&appid=da832868abbc7d70cf172f64bd93e3d6`
    fetch(cityWeUrl)
    .then(response => response.json())
    .then(function (data) {

        let focusName = document.createElement(`H2`)
        focusName.textContent = window.cityName

        let iconId = data.list[0].weather[0].icon
        let weatherIcon = `https://openweathermap.org/img/wn/${iconId}@2x.png`

        let iconPic = document.createElement(`img`)
        iconPic.setAttribute(`src`, weatherIcon)

        let currentDate = document.createElement(`H2`)
        currentDate.textContent = "(" + data.list[0].dt_txt +")"

        let currentTemp = document.createElement(`li`)
        currentTemp.textContent = "Temp: " + data.list[0].main.temp +"°C"

        let currentHumid = document.createElement(`li`)
        currentHumid.textContent = "Humidity: " + data.list[0].main.humidity + "%"

        let currentWind = document.createElement(`li`)
        currentWind.textContent = "Wind Speed: " + data.list[0].wind.speed + "km/h"

        todayWeather.append(focusName)
        todayWeather.append(currentDate)
        todayWeather.append(iconPic)
        weatherInfo.append(currentTemp)
        weatherInfo.append(currentHumid)
        weatherInfo.append(currentWind)

    })
}    