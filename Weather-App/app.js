let getData = new Promise((resolve,reject) => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=1ae8b62d6d656b2b2f9eb7b1f9203317")
    .then(res => res.json())
    .then(res => resolve(console.log(res)))
    .catch(err => reject(err))
})

getData

let url = window.navigator.geolocation;