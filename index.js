var apiKey = "c78f98deeef4c403d7d54ac84ffbb213";

function getWeather(cityName) {
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`,
    method: "GET",
  }).then(function (currentWeather) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/onecall?appid=${apiKey}&units=imperial&exclude=minutely,hourly,alerts&lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}`,
    }).then(function (results) {
      $("#currentCity").text(currentWeather.name);
      $("#temperature").text(currentWeather.main.temp);
      $("#humidity").text(currentWeather.main.humidity);
      $("#windSpeed").text(currentWeather.wind.speed);
      $("#uvIndex").text(results.current.uvi);
      var fiveDay = $("#fiveDay");
      for (i = 0; i < 5; i++) {
        fiveDay.append(`
        <li>
        day ${i + 1}
        <div>Temperature ${results.daily[i].temp.day}</div>
        <div>Humidity ${results.daily[i].humidity}</div>
        </li>
        `);
      }
    });
  });
}
$("#search").on("submit", function (event) {
  event.preventDefault();
  getWeather($("#citysearch").val())
})

