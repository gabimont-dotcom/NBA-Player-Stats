document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
  const weatherDiv = document.getElementById('weatherInfo');
  weatherDiv.innerHTML = "Loading...";

  // Open-Meteo API endpoint for Tokyo
  const url = "https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&current_weather=true";

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      const { temperature, windspeed } = data.current_weather;
      weatherDiv.innerHTML = `
        <p>🌡️ Temperature: <strong>${temperature}°C</strong></p>
        <p>💨 Wind Speed: <strong>${windspeed} km/h</strong></p>
      `;
    })
    .catch(error => {
      weatherDiv.innerHTML = `<p style="color: red;">❌ Error: Could not fetch weather data. Please try again later.</p>`;
      console.error("Error fetching weather data:", error);
    });
}
