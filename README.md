<h1>Weather Dashboard</h1>

I created a dashboard so that travelers can easily check the weather for a given city. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. OpenWeather is the third-party app I utilized for the API calls.

## Acceptance Criteria

GIVEN a weather dashboard with form inputs
<br>
WHEN I search for a city
<br>
THEN I am presented with current and future conditions for that city and that city is added to the search history
<br>
WHEN I view current weather conditions for that city
<br>
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
<br>
WHEN I view the UV index
<br>
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
<br>
WHEN I view future weather conditions for that city
<br>
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
<br>
WHEN I click on a city in the search history
<br>
THEN I am again presented with current and future conditions for that city
<br>
<br>
Link to deployed app: https://nparker80.github.io/weather-dashboard/

https://user-images.githubusercontent.com/91171412/143778630-001a09e8-af97-41dd-875e-018b9a76439d.mp4

<h2>Resources</h2>
https://momentjs.com/docs/#/use-it/browser/
<br>
https://openweathermap.org/faq
<br>
https://openweathermap.org/api
<br>
https://stackoverflow.com/questions/70019689/im-having-problems-with-the-openweather-api-geolocation
<br>
https://stackoverflow.com/questions/69268475/how-to-fetch-open-weather-map-api

<h2>Future Improvements</h2>
*Add functionality to allow user to press enter to search OR click on the search glass icon
<br>
*Add auto complete function so that user does not have to type the complete city into the search box
<br>
*City name should clear after user completes a search
<br>
*Eliminate decimal on Temperature and Wind Speed
<br>
*If city name is not recognized, a modal should appear
<br>
*Add city, state and country so that user can be confident they are retrieving the weather for the correct locale and country
