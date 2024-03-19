const apiKey = '99eef5d404a6259101a934bd7e22d187'; 

async function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        displayWeather(data);
    } else {
        displayError(data.message);
    }
    } catch (error) {
    displayError('An error occurred. Please try again.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    weatherInfo.innerHTML = 
        `<h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>`;
}

function displayError(message) {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>${message}</p>`;
}
