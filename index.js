const apiKey = "107c55dcbb1cfec3cf2d160b6049bcab";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-Icon")



// function fetchUserLocation() {
// 	if (navigator.geolocation) {
// 	  navigator.geolocation.getCurrentPosition(
// 		(position) => {
// 		  const latitude = position.coords.latitude;
// 		  const longitude = position.coords.longitude;
// 		  fetchWeatherByCoordinates(latitude, longitude);
// 		},
// 		(error) => {
// 		  console.error('Error getting user location:', error);
// 		}
// 	  );
// 	} else {
// 	  console.error('Geolocation is not supported by this browser.');
// 	}
//   }

  
//   async function fetchWeatherByCoordinates(latitude, longitude) {
// 	const response = await fetch(`${apiURL}lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
// 	const data = await response.json();
// 	console.log(data);
// 	checkweather(data.name);
//   }

  
//   fetchUserLocation();




async function checkweather(city){
	const response = await fetch(apiURL + city + `&appid=${apiKey}`);
	if(response.status == 404){
		document.querySelector(".error").style.display = 'block';
		document.querySelector(".weather").style.display = 'none';
	}
	else{
		var data = await response.json();
	console.log(data)

	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
	if (data.weather[0].main == 'Clouds'){
		weatherIcon.src = "weather-app-img/images/clouds.png";
		
	} 

	else if (data.weather[0].main == 'Drizzle'){
		weatherIcon.src = "weather-app-img/images/drizzle.png";
		
	}
	
	else if (data.weather[0].main == 'Clear'){
		weatherIcon.src = "weather-app-img/images/clear.png";
	}
	
	else if (data.weather[0].main == 'Snow'){
		weatherIcon.src = "weather-app-img/images/snow.png";
	}
	
	else if (data.weather[0].main == 'Mist'){
		weatherIcon.src = "weather-app-img/images/mist.png";
	}
	
	else if (data.weather[0].main == 'Rain'){
		weatherIcon.src = "weather-app-img/images/rain.png";
	}
	document.querySelector(".weather").style.display = 'block';
	document.querySelector(".error").style.display = 'none';
} 
	}
	
// function myFunction() {
// 	var element = document.body;
// 	element.classList.toggle("dark-mode");
// }

// document.querySelector(".switch").addEventListener('click', ()=>{
// 	document.body.style.backgroundColor = 'white';
// })
	
searchBtn.addEventListener("click", ()=>{
	checkweather(searchbox.value);
})

searchbox.addEventListener('keypress', function(e){
	if(e.key === 'Enter'){
		checkweather(searchbox.value);
	}
});




