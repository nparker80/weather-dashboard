const APIKey = "fca898804db55b003fe45d3544a59034";

let city;
let queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey;

fetch(queryURL);
