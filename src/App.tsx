import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { getWeather } from './API/weatherService';

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  visibility: number;
  wind: {
    speed: number;
  }
  sys: {
    sunrise: number;
    sunset: number;
    country: string;
  }
}

const App = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setWeather(data);
    };
    fetchData();
  }, []);

  if (weather) {
    const { name, visibility } = weather;
    const { temp, feels_like, humidity, pressure, temp_min, temp_max } = weather.main;
    const windSpeed = weather.wind.speed;
    const { sunrise, sunset, country } = weather.sys;
  }


  const toUTC = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = `${date.getHours()}:${date.getMinutes()}`;

    return formattedDate;
  }


  const dayLength = (t1: number, t2: number) => {
    const sunrise = new Date(t1 * 1000).valueOf();
    const sunset = new Date(t2 * 1000).valueOf();

    const lengthInSeconds = ((sunset - sunrise) / 1000) / 60;
    const hours = Math.floor(lengthInSeconds / 60);
    const minutes = Math.round(lengthInSeconds % 60);

    return `${hours}:${minutes}`;
  }


  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <article className={styles.card}>
          <h1>{weather && Math.round(weather?.main.temp)} °C</h1>
          <h1>Feels like {weather && Math.round(weather?.main.temp)} °C</h1>
          <h2>{weather?.name}, {weather?.sys.country}</h2>
          <h2>Visibility {weather && (weather?.visibility) / 1000}KM</h2>
          <div className={styles.card__block}>
            <span>Min Temp: {weather && Math.round(weather?.main.temp_min)}</span>
            <span>Max Temp: {weather && Math.round(weather?.main.temp_max)}</span>
          </div>
          <div className={styles.card__block}>
            <span>{weather?.main.humidity}% Humidity</span>
            <span>{weather?.wind.speed} Wind Speed</span>
          </div>
          <div className={styles.card__block}>
            <span>Восход: {weather && toUTC(weather?.sys.sunrise)}</span>y
            <span>Закат: {weather && toUTC(weather?.sys.sunset)}</span>
          </div>
          <h2>Продолжительность дня: {weather && dayLength(weather?.sys.sunrise, weather?.sys.sunset)}</h2>
          <p>Pressure {weather?.main.pressure} гПа</p>
        </article>
      </div>
    </div>
  )
}

export default App
