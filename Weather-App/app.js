const month = ["Jan","Fab","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const weekDays = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
const date= new Date();
let day = weekDays[date.getDay()]
let monthYear = month[date.getMonth()]
let time = date.getHours()+":"+date.getMinutes()
// AppId and ApiUrl
const appId = "&appid=1ae8b62d6d656b2b2f9eb7b1f9203317";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



function searchBtn(queryByCity){
    var queryByCity = document.getElementById("searchInput")
    checkWeather(queryByCity.value)
}

async function checkWeather(queryByCity){
    const response = await fetch(apiUrl+queryByCity+appId)
    var data = await response.json();
    console.log(data)
    let main = document.getElementById("main")
    let weatherObj = {
      smoke : "https://cdn-icons-png.flaticon.com/512/4414/4414055.png",
      haze : "https://cdn-icons-png.flaticon.com/512/182/182266.png",
      sunny : "https://cdn.dribbble.com/users/2120934/screenshots/6193524/19_mostlysunny.gif",
      rain : "https://cdn.dribbble.com/users/2120934/screenshots/6193512/11_rain.gif",
      snow: "https://cdn.dribbble.com/users/2120934/screenshots/6193458/13_snow.gif"
    }
    let imgSrc;

    if(data.weather[0].main == "Haze"){
      imgSrc = weatherObj.haze
    }
    else if(data.weather[0].main == "Smoke"){
      imgSrc = weatherObj.smoke
    }
    else if(data.weather[0].main == "Snow"){
      imgSrc = weatherObj.snow
    }
    else if (data.weather[0].main == "Rain"){
      imgSrc = weatherObj.rain
    }
    else{
      imgSrc = "images/sun_2698194.png"
    }
    main.innerHTML = `
    <div class="input-sec">
    <input type="text"placeholder="Enter your city" id="searchInput">
    <a href="javascript:void(0)" onclick="searchBtn()" id="search"><i class="fa-solid fa-magnifying-glass"></i></a>
  </div>
  <div class="input-main">
    <h1>${data.name}</h1>
    <p>${day},${date.getDate()} ${monthYear},${time}</p>
    <div class="img-sec">
        <div class="input-main">
        <img src=${imgSrc} alt="smoke-icon" />
      
          <h1>${data.weather[0].main}</h1>
        </div>
        <div class="input-main">
          <h1>${Math.round(data.main.temp)}<sup><span class="tem-deg">o</span>c</sup></h1>
          <p><i class="fa-solid fa-temperature-arrow-up"></i>${Math.round(data.main.temp_max)}<sup>o</sup>|<i class="fa-solid fa-temperature-arrow-down"></i>${Math.round(data.main.temp_min)}<sup>o</sup></p>
        </div>
    </div>
      <p>Wind: <i class="fa-solid fa-wind"></i> ${Math.round(data.wind.speed)}km/h</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Country: ${data.sys.country}</p>
    </div>
  </div>
          `
}

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.getElementById("demo").innerHTML =
//     "Geolocation is not supported by this browser.";
//   }
  
//   function showPosition(position) {
//     document.getElementById("demo").innerHTML =
//     "Latitude: " + position.coords.latitude +" Longitude: " + position.coords.longitude;
//   }