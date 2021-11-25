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

  let currentDate = document.createElement("span");
  currentDate.textContent =
    "(" + moment(weather.dt.value).format("MMM D, YYYY") + ")";
  citySearchForm.appendChild(currentDate);

  let weatherIcon = document.createElement("img");
  weatherIcon.setAttribute(
    "src",
    "https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.pmg"
  );
  citySearchForm.appendChild(weatherIcon);

  let temperature = document.createElement("span");
  temperate.textContent = "Temperature: " + weather.main.temp + " °F";
  temperature.classList = "list-group";

  let humidity = document.createElement("span");
  humidity.textContent = "Humidity: " + weather.main.humidity + " %";
  humidity.classList = "list-group";

  let windSpeed = document.createElement("span");
  windSpeed.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
  windSpeed.classList = "list-group";

  currentWeatherContainer.appendChild(temperature);
  currentWeatherContainer.appendChild(humidity);
  currentWeatherContainer.appendChild(windSpeed);

  const lat = weather.coord.lat;
  const lon = weather.coord.lon;
  getUvIndex(lat, lon);
};
