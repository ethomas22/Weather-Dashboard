////////////////////////////////////////////
//To Do:
//once ajax call is successul, put it on the screen using jquery
//get 5 day forecast 
///////////////////////////////////////////
//Global Variables
var cityName = "San Diego";

//script that gets the users input in your html search and grabs it and assigns it to cityName

var queryURL =
'http://api.openweathermap.org/data/2.5/weather?q=' +
  cityName +
  "&appid=c78f98deeef4c403d7d54ac84ffbb213&units=imperial";
   
//c78f98deeef4c403d7d54ac84ffbb213
//anonymous function because it doesn't have any parameters aka nothing in its parentheses
  function getWeather() {
    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
      });  
}
//call the function to make it execute. 
getWeather();

$('#searchcity').on('click', '.list-group-item', function () {
    clearListActive();
    $(this).toggleClass('active');
    dataRender($(this).text());
  })


