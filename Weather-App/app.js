const appId = "&appid=1ae8b62d6d656b2b2f9eb7b1f9203317";
const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="



function searchBtn(queryByCity){
    var queryByCity = document.getElementById("searchInput")
    checkWeather(queryByCity.value)
}


async function checkWeather(queryByCity){
    const response = await fetch(apiUrl+queryByCity+appId)
    var data = await response.json();
    console.log(data.name)
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