import { useAppDispatch } from './redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

//styles
import './scss/main.scss'

//components
import Navbar from './components/Navbar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'

//redux
import { fetchCurrentWeather } from './redux/weather/asyncActions'
import { weatherSelector } from './redux/weather/selectors'


const App = () => {
  const dispatch = useAppDispatch();
  const { units } = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchCurrentWeather({}));
  }, [units])

  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <div className="container">
          <div className='main__wrapper'>
            <section>
              <CurrentWeather />
            </section>
            <section>
              <Forecast />
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
export default App
