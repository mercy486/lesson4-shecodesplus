let time = new Date ();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let currentDay = days[time.getDay()];
let currentHour = time.getHours();
if(currentHour < 9) {
    currentHour = `0${currentHour}`
}
let currentMinute = time.getMinutes();
if(currentMinute < 9) {
    currentMinute = `0${currentMinute}`
}
let dateElement = document.querySelector("#date-time");
dateElement.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;

function weatherAppSearch(event) {
  event.preventDefault();
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = cityName.value;
}

let citySearch = document.querySelector("#city-search");
let cityName = document.querySelector("#city-name"); 
citySearch.addEventListener("submit", weatherAppSearch);

function weatherAppSearch (event) {
    event.preventDefault();
  let cityName = document.querySelector("#city-name").value;
  cityName = cityName.toLowerCase();
  cityName = cityName.trim();
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let units = "metric"; 
  
  let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response){
    let city = response.data.name;
    let temp = Math.round(response.data.main.temp);
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    
    let cityDisplay = document.querySelector("#city");
    let tempDisplay = document.querySelector("#weather");
    let humidDisplay = document.querySelector("#humidity");
    let windDisplay = document.querySelector("#wind");

    cityDisplay.innerHTML = `${city}`;
    tempDisplay.innerHTML = `${temp}`;
    humidDisplay.innerHTML = `Humidity:${humidity}%`;
    windDisplay.innerHTML = `Wind:${wind}km/h`;

    console.log(response);
}
let form = document.querySelector("#city-search");
form.addEventListener("submit",weatherAppSearch);

function showPosition(position) {
  navigator.geolocation.getCurrentPosition(showPosition);

  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showPosition);
}







