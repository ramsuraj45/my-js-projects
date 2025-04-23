// ⚠️ Replace this with your real API key from OpenWeatherMap
const API_KEY = 'bcb994ca1e00db6471662a335639c745';

function getWeather() {
  const city = document.getElementById('city').value;
  const result = document.getElementById('result');

  if (city === '') {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;

      result.innerHTML = `
        <h3>${name}</h3>
        <p>🌡️ Temperature: ${temp} °C</p>
        <p>📋 Condition: ${desc}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = `❌ Error: ${error.message}`;
    });
}
