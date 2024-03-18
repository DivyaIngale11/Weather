function getWeather() {
    var cityInput = document.getElementById("cityInput").value;
    var weatherInfo = document.getElementById("weatherInfo");

    // Replace the following with a real API call to get actual weather data
    var temperature = Math.floor(Math.random() * (35 - 10) + 10);
    var condition = Math.random() > 0.5 ? "Sunny" : "Cloudy";

    var weatherText = `Weather in ${cityInput}: ${temperature}°C, ${condition}`;
    weatherInfo.innerHTML = weatherText;
}
