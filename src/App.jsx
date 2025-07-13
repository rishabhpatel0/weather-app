import { useEffect, useState } from 'react';
import WeatherCanvas from './components/WeatherCanvas';
import WeatherDetails from './components/WeatherDetails';
import useInView from './hooks/useInView';

function App() {
  const [coords, setCoords] = useState(null);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const [canvasRef, canvasInView] = useInView({ threshold: 0.1 });
  const [detailsRef, detailsInView] = useInView({ threshold: 0.1 });

  function fetchWeatherByCity() {
    if (!city) {
      alert('Please enter a city name');
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
        } else {
          alert(`City not found: ${data.message}`);
        }
      })
      .catch((error) => {
        console.error('Error fetching weather:', error);
        alert('Error fetching weather');
      });
  }

  function fetchWeatherByCoords() {
    if (!coords) {
      alert('Location not available');
      return;
    }
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
        } else {
          console.error('Geolocation weather error:', data);
          alert('Error fetching weather for your location');
        }
      })
      .catch((error) => {
        console.error('Error fetching geolocation weather:', error);
        alert('Error fetching weather');
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
        setCoords(loc);
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Location access denied. Please search by city.');
      }
    );
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeatherByCoords();
    }
  }, [coords]);

  return (
    <div className="container">
      <h1>🌤Weather Visualizer</h1>

      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherByCity}>Search</button>
        <button onClick={fetchWeatherByCoords} title="Use my location">📍</button>
      </div>

      {!weather && <p>Loading weather data...</p>}

      {weather && (
        <>
          <section>
            <h2>{weather.name}</h2>
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p>{weather.weather[0].description}</p>
          </section>

          <section ref={canvasRef}>
            {canvasInView ? (
              <WeatherCanvas condition={weather.weather[0].main} />
            ) : (
              <p>⬇️ Scroll to load visual...</p>
            )}
          </section>

          <section ref={detailsRef}>
            {detailsInView ? (
              <WeatherDetails weather={weather} />
            ) : (
              <p>⬇️ Scroll to see full weather details...</p>
            )}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
