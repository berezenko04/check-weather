import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

//styles
import styles from './App.module.scss'

//utils
import { toUTC } from './utils/toUTC';
import { getDayLength } from './utils/getDayLength';

//icons
import { ReactComponent as SunIcon } from './assets/icons/sun.svg'
import { ReactComponent as SearchIcon } from './assets/icons/search.svg'

//redux
import { fetchWeather } from './redux/weather/asyncActions';
import { useAppDispatch } from './redux/store';
import { statusSelector, weatherSelector } from './redux/weather/selectors';


const App = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();


  useEffect(() => {
    dispatch(fetchWeather({
      units: 'metric',
      cityname: 'Kyiv'
    }));
  }, []);

  const weather = useSelector(weatherSelector);
  const status = useSelector(statusSelector);

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
                  <input type="text" placeholder='Search city...' onChange={(e) => setSearch(e.target.value)} value={search} />
                  <button onClick={() => dispatch(fetchWeather({ units: 'metric', cityname: search }))}>Search</button>
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
      </div>
    </div>
  )
}
export default App
