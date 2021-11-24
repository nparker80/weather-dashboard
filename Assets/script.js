let cities = [];

const citySearchForm = document.querySelector("#input-form");
const cityInput = document.querySelector("#city");
const currentWeatherContainer = document.querySelector("#search-container");
const searchedCity = document.querySelector("#searched-city");
const forecast = document.querySelector("#forecast");
const fiveDayContainer = document.querySelector("#five-day-container");
const previousCitySearch = document.querySelector(
  "#previous-city-search-button"
);

let formSubmit = function (event) {
  event.preventDefault();
  let city = cityInput.value.trim();

  if (city) {
    getCityWeather(city);
    getFiveDayForecast(city);
    cities.unshift({ city });
    cityInput.value = "";
  } else {
    alert("Please Enter a City Name");
  }

  citySearchForm.addEventListener("submit", formSubmit);
};

let saveSearch = function () {
  localStorage.setItem("cities", JSON.stringify(cities));
};

function getApi() {
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=impreial&appid=${apiKey}";
  const apiKey = "fca898804db55b003fe45d3544a59034";

  fetch(apiURL).then(function (response) {
    response.json().then(function (data) {
      displayWeather(city, data);
    });
  });
}

let displayWeather = function (weather, searchCity) {
  currentWeatherContainer.textContent = "";
  citySearchForm.textContent = searchCity;
};

// call API
// fetch API
// JSON response
