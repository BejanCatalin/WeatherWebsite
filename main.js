const api = {
  key: "7ad550beb430f159d57b180a919a67ee",
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;
  var desc = weather.weather[0].main;
  
  if(desc == "Mist")
	 document.body.style.backgroundImage = "url('img/mist.jpg')";
else if(desc == "Clouds")
        document.body.style.backgroundImage = "url('img/cloudy.jpg')";
	else if(desc == "Haze")
        document.body.style.backgroundImage = "url('img/mist.jpg')";
	else if(desc == "Clear")
        document.body.style.backgroundImage = "url('img/clear.jpg')";
	else if(desc == "Smoke")
        document.body.style.backgroundImage = "url('img/smoke.jpg')";
	else if(desc == "Thunderstorm")
        document.body.style.backgroundImage = "url('img/thunderstorm.jpg')";
	else if(desc == "Snow")
        document.body.style.backgroundImage = "url('img/snow.jpg')";
	else if(desc == "Drizzle")
        document.body.style.backgroundImage = "url('img/drizzle.jpg')";
	else if(desc == "Fog")
        document.body.style.backgroundImage = "url('img/mist.jpg')";
	else if(desc == "Dust")
        document.body.style.backgroundImage = "url('img/dust.jpg')";
	else if(desc == "Sand")
        document.body.style.backgroundImage = "url('img/dust.jpg')";
	else if(desc == "Ash")
        document.body.style.backgroundImage = "url('img/ash.jpg')";
	else if(desc == "Tornado")
        document.body.style.backgroundImage = "url('img/tornado.jpg')";	
else document.body.style.backgroundImage = "url('img/rain.jpg')";

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = ` Min:${Math.round(weather.main.temp_min)}°C / Max:${Math.round(weather.main.temp_max)}°C`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
}
