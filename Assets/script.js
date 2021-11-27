const apiKey = "&appid=99bddfe7b8090841d791ec8882c057c0";

let searchHistoryCities=[];
let curretnDay=moment().format("L");

function currentWeather(city) {
  const queryUrl ="https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}";
  
  $.ajax({
    url: queryUrl,
    method: "GET",
  }).then(function (citySearchWeatherResponse) {
    console.log(citySearchWeatherResponse);

    $("#currentWeather").css("display","block");
    $("#cityWeatherDetail").empty();

    let weatherIcon=citySearchWeatherResponse.weather[0].icon;
    let iconURL="https://openweathermap.org/img/w/${weatherIcon}.png";

    let currentCity = $(`
      <h2 id="currentCity">
          ${cityWeatherResponse.name} ${today} <img src="${iconURL}" alt="${cityWeatherResponse.weather[0].description}" />
      </h2>
      <p>Temperature: ${cityWeatherResponse.main.temp} °F</p>
      <p>Humidity: ${cityWeatherResponse.main.humidity}\%</p>
      <p>Wind Speed: ${cityWeatherResponse.wind.speed} MPH</p>
    `);

    $("#cityWeatherDetail").append(currentCity);

    let latitude = cityWeatherResponse.coord.lat;
    let longitude = cityWeatherResponse.coor.lon;
    let uviQueryURL="https://api.openweathermap.org/data/2.5/uvi?lat=${latitude}&lon=${longitude}&appid=${apiKey}";

    $.ajax({
      url: uviQueryURL,
      method:"GET"
    }).then(function(uviResponse){
      
      let uvIndex=uviresponse.value;
      let uvIndexP=$(`<p>UV Index:
      <span id="uvIndexColor" class="px-2 py-2 rounded">${uvIndex}</span>
      </p>`)
      `);

//       $("#cityWeatherDetail").append(uvIndexP);

//       futureCondition(lat,lon);

//       if(uvIndex>=0&&uvIndex<=2){
//         $("uvIndexColor").css("background-color","#3EA72D").css("color","white");
//       } else if (uvIndex>=3&&uvIndex<=5){
//         $("uvIndexColor").css("background-color","#FFF300");
//       } else if (uvIndex>=6&&uvIndex<=7){
//         $("uvIndexColor").css("background-color","#F18B00");
//       } else if (uvIndex>=8&&uvIndex<=10){
//         $("uvIndexColor").css("background-color","#E53210").css("color","white");
//       } else {
//         $("uvIndexColor").css("background-color","#B567A4").css("color","white");
//       };
//     });
//   });
// }
