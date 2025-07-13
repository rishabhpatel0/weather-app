export default function WeatherDetails({ weather }) {
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  const details = [
    { label: '🌡 Temperature', value: `${Math.round(weather.main.temp)}°C` },
    { label: '🤒 Feels Like', value: `${Math.round(weather.main.feels_like)}°C` },
    { label: '📈 Max Temp', value: `${Math.round(weather.main.temp_max)}°C` },
    { label: '📉 Min Temp', value: `${Math.round(weather.main.temp_min)}°C` },
    { label: '💧 Humidity', value: `${weather.main.humidity}%` },
    { label: '🌬 Wind Speed', value: `${weather.wind.speed} m/s` },
    { label: '🎯 Wind Direction', value: `${weather.wind.deg}°` },
    { label: '☁️ Cloudiness', value: `${weather.clouds.all}%` },
    { label: '📊 Pressure', value: `${weather.main.pressure} hPa` },
    { label: '🌅 Sunrise', value: sunrise },
    { label: '🌇 Sunset', value: sunset },
    { label: '👀 Visibility', value: `${weather.visibility / 1000} km` }
  ];

  return (
    <div className="weather-card">
      <h3>🌍 Full Weather Report</h3>
      <div className="card-grid">
        {details.map((item, idx) => (
          <div className="card" key={idx}>
            <strong>{item.label}</strong>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
