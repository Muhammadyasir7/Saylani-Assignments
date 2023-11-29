const month = ["Jan","Fab","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
const weekDays = ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"];
const date= new Date();
let day = weekDays[date.getDay() -1]
let monthYear = month[date.getMonth()]
let time = date.getHours()+":"+date.getMinutes()
// AppId and ApiUrl
const appId = "&appid=1ae8b62d6d656b2b2f9eb7b1f9203317";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="



function searchBtn(queryByCity){
    var queryByCity = document.getElementById("searchInput")
    checkWeather(queryByCity.value)
}

async function checkWeather(queryByCity){
    const response = await fetch(apiUrl+queryByCity+appId)
    var data = await response.json();
    console.log(data)
    let main = document.getElementById("main")
    main.innerHTML = `
    <div class="input-sec">
    <input type="text"placeholder="Enter your city" id="searchInput">
    <a href="javascript:void(0)" onclick="searchBtn()" id="search"><i class="fa-solid fa-magnifying-glass"></i></a>
  </div>
  <div class="input-main">
    <h1>${data.name}</h1>
    <p>${day},${date.getDate()} ${monthYear},${time}</p>
    <div class="img-sec">
        <div>
          <img src="images/sun_2698194.png" alt="">
          <p>${data.weather[0].main}</p>
        </div>
        <div>
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