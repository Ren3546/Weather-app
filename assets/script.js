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

        let iconId1 = data.list[8].weather[0].icon
        let weatherIcon1 = `https://openweathermap.org/img/wn/${iconId1}@2x.png`

        let iconPic1 = document.createElement(`img`)
        iconPic1.setAttribute(`src`, weatherIcon1)

        let currentDate1 = document.createElement(`H2`)
        currentDate1.textContent = "(" + data.list[8].dt_txt +")"

        let currentTemp1 = document.createElement(`li`)
        currentTemp1.textContent = "Temp: " + data.list[8].main.temp +"°C"

        let currentHumid1 = document.createElement(`li`)
        currentHumid1.textContent = "Humidity: " + data.list[8].main.humidity + "%"

        let currentWind1= document.createElement(`li`)
        currentWind1.textContent = "Wind Speed: " + data.list[8].wind.speed + "km/h"

        todayWeather1.append(currentDate1)
        todayWeather1.append(iconPic1)
        weatherInfo1.append(currentTemp1)
        weatherInfo1.append(currentHumid1)
        weatherInfo1.append(currentWind1)

        let iconId2 = data.list[16].weather[0].icon
        let weatherIcon2 = `https://openweathermap.org/img/wn/${iconId2}@2x.png`

        let iconPic2 = document.createElement(`img`)
        iconPic2.setAttribute(`src`, weatherIcon2)

        let currentDate2 = document.createElement(`H2`)
        currentDate2.textContent = "(" + data.list[16].dt_txt +")"

        let currentTemp2 = document.createElement(`li`)
        currentTemp2.textContent = "Temp: " + data.list[16].main.temp +"°C"

        let currentHumid2 = document.createElement(`li`)
        currentHumid2.textContent = "Humidity: " + data.list[16].main.humidity + "%"

        let currentWind2= document.createElement(`li`)
        currentWind2.textContent = "Wind Speed: " + data.list[16].wind.speed + "km/h"

        todayWeather2.append(currentDate2)
        todayWeather2.append(iconPic2)
        weatherInfo2.append(currentTemp2)
        weatherInfo2.append(currentHumid2)
        weatherInfo2.append(currentWind2)

        let iconId3 = data.list[24].weather[0].icon
        let weatherIcon3 = `https://openweathermap.org/img/wn/${iconId3}@2x.png`

        let iconPic3 = document.createElement(`img`)
        iconPic3.setAttribute(`src`, weatherIcon3)

        let currentDate3 = document.createElement(`H2`)
        currentDate3.textContent = "(" + data.list[24].dt_txt +")"

        let currentTemp3 = document.createElement(`li`)
        currentTemp3.textContent = "Temp: " + data.list[24].main.temp +"°C"

        let currentHumid3 = document.createElement(`li`)
        currentHumid3.textContent = "Humidity: " + data.list[24].main.humidity + "%"

        let currentWind3= document.createElement(`li`)
        currentWind3.textContent = "Wind Speed: " + data.list[24].wind.speed + "km/h"

        todayWeather3.append(currentDate3)
        todayWeather3.append(iconPic3)
        weatherInfo3.append(currentTemp3)
        weatherInfo3.append(currentHumid3)
        weatherInfo3.append(currentWind3)

        let iconId4 = data.list[32].weather[0].icon
        let weatherIcon4 = `https://openweathermap.org/img/wn/${iconId4}@2x.png`

        let iconPic4 = document.createElement(`img`)
        iconPic4.setAttribute(`src`, weatherIcon4)

        let currentDate4 = document.createElement(`H2`)
        currentDate4.textContent = "(" + data.list[32].dt_txt +")"

        let currentTemp4 = document.createElement(`li`)
        currentTemp4.textContent = "Temp: " + data.list[32].main.temp +"°C"

        let currentHumid4 = document.createElement(`li`)
        currentHumid4.textContent = "Humidity: " + data.list[32].main.humidity + "%"

        let currentWind4= document.createElement(`li`)
        currentWind4.textContent = "Wind Speed: " + data.list[32].wind.speed + "km/h"

        todayWeather4.append(currentDate4)
        todayWeather4.append(iconPic4)
        weatherInfo4.append(currentTemp4)
        weatherInfo4.append(currentHumid4)
        weatherInfo4.append(currentWind4)

        let iconId5 = data.list[39].weather[0].icon
        let weatherIcon5 = `https://openweathermap.org/img/wn/${iconId5}@2x.png`

        let iconPic5 = document.createElement(`img`)
        iconPic5.setAttribute(`src`, weatherIcon5)

        let currentDate5 = document.createElement(`H2`)
        currentDate5.textContent = "(" + data.list[39].dt_txt +")"

        let currentTemp5 = document.createElement(`li`)
        currentTemp5.textContent = "Temp: " + data.list[39].main.temp +"°C"

        let currentHumid5 = document.createElement(`li`)
        currentHumid5.textContent = "Humidity: " + data.list[39].main.humidity + "%"

        let currentWind5= document.createElement(`li`)
        currentWind5.textContent = "Wind Speed: " + data.list[39].wind.speed + "km/h"

        todayWeather5.append(currentDate5)
        todayWeather5.append(iconPic5)
        weatherInfo5.append(currentTemp5)
        weatherInfo5.append(currentHumid5)
        weatherInfo5.append(currentWind5)


    })
}    