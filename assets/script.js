let submitBut = document.getElementById(`submit`)
let formCity = document.getElementById(`form`)
let cityName;
let cityList = document.getElementById(`cityList`)
let cityLat;
let cityLong;
let todayWeather = document.getElementById(`today`)
let weatherInfo = document.getElementById(`weatherInfo`)
let objCity = [];
var cityOld = JSON.parse(localStorage.getItem('cities'))

renderList();

function renderList() {

if (cityOld !== null) {
    for (var i = 0; i < cityOld.length; i++) {
        var todo = cityOld[i];
    
        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);
    
        cityList.appendChild(li);
      }
}
}

submitBut.addEventListener("click", function(event) {
    event.preventDefault();
    window.cityName = document.querySelector("#text").value;
    searchCity();
});

cityList.addEventListener("click", function(event) {
    window.cityName = event.target.innerHTML
    $(todayWeather).empty();
    $(weatherInfo).empty();
    $(todayWeather1).empty();
    $(weatherInfo1).empty();
    $(todayWeather2).empty();
    $(weatherInfo2).empty();
    $(todayWeather3).empty();
    $(weatherInfo3).empty();
    $(todayWeather4).empty();
    $(weatherInfo4).empty();
    $(todayWeather5).empty();
    $(weatherInfo5).empty();

    searchCity();
});

function searchCity() {
    let cityUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${window.cityName}&appid=da832868abbc7d70cf172f64bd93e3d6`
    fetch(cityUrl)
    .then(response => response.json())
    .then(function (data) {
        window.cityLat = data[0].lat;
        window.cityLong = data[0].lon;

        let cityPart = document.createElement('li')
        
    
        cityPart.textContent = window.cityName;
        cityList.append(cityPart)
    
        var newObj = window.cityName
    
        objCity.push(newObj)
    
        localStorage.setItem(`cities`, JSON.stringify(objCity))

        $(todayWeather).empty();
        $(weatherInfo).empty();
        $(todayWeather1).empty();
        $(weatherInfo1).empty();
        $(todayWeather2).empty();
        $(weatherInfo2).empty();
        $(todayWeather3).empty();
        $(weatherInfo3).empty();
        $(todayWeather4).empty();
        $(weatherInfo4).empty();
        $(todayWeather5).empty();
        $(weatherInfo5).empty();
    
        cityWeather()
    })
}

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