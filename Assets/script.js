let cities = [];

const citySearchForm = document.querySelector("#input-form");
const cityInput = document.querySelector("#city");
const currentWeatherContainer = document.querySelector("#search-container");
const searchedCity = document.querySelector("#searched-city");
const forecast = document.querySelector("#forecast");
const fiveDayContainer = document.querySelector("#five-day-container");
const previousCitySearch = document.querySelector("#previous-city-search-button");

let formSubmit=function(event) {
  event.preventDefault();
  let city=cityInput.value.trim();

  if(city) {
    getCityWeather(city);
    getFiveDayForecast(city);
    cities.unshift({city});
    cityInput.value="";
  } else{
    alert("Please Enter a City Name");
}

citySearchForm.addEventListener("submit", formSubmit);