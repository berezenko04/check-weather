import { useEffect, useState } from 'react'

//styles
import styles from './App.module.scss'

//API
import { getWeather } from './API/weatherService';

//utils
import { toUTC } from './utils/toUTC';
import { getDayLength } from './utils/getDayLength';

//icons
import { ReactComponent as SunIcon } from './assets/icons/sun.svg'
import { ReactComponent as SearchIcon } from './assets/icons/search.svg'

interface WeatherData {
  weather: {
    icon: string;
    main: string;
  };
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


  return (
    <div className={styles.app}>
      <div className={styles.app__wrapper}>

        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.header__wrapper}>
              <a href="/">
                <SunIcon />
                Check Weather
              </a>
              <div className={styles.header__search__wrapper}>
                <div className={styles.header__search}>
                  <SearchIcon />
                  <input type="text" placeholder='Search city...' />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.container}>
          <div className={styles.weather}>
            <h2>{weather?.weather.main}</h2>
            <h1>{weather && Math.round(weather?.main.temp)}° C</h1>
            <h1>Feels like {weather && Math.round(weather?.main.temp)}° C</h1>
            <h2>{weather?.name}, {weather?.sys.country}</h2>
            <h2>Visibility {weather && (weather?.visibility) / 1000}KM</h2>
            <div className={styles.weather__block}>
              <span>Min Temp: {weather && Math.round(weather?.main.temp_min)}</span>
              <span>Max Temp: {weather && Math.round(weather?.main.temp_max)}</span>
            </div>
            <div className={styles.weather__block}>
              <span>{weather?.main.humidity}% Humidity</span>
              <span>{weather?.wind.speed} Wind Speed</span>
            </div>
            <div className={styles.weather__block}>
              <span>Восход: {weather && toUTC(weather?.sys.sunrise)}</span>
              <span>Закат: {weather && toUTC(weather?.sys.sunset)}</span>
            </div>
            <h2>Продолжительность дня: {weather && getDayLength(weather?.sys.sunrise, weather?.sys.sunset)}</h2>
            <p>Pressure {weather?.main.pressure} гПа</p>
          </div>
        </div>

      </div >
    </div >
  )
}

export default App
