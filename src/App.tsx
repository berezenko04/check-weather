import { useAppDispatch } from './redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

//styles
import './scss/main.scss'

//components
import Navbar from './components/Navbar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import Footer from './components/Footer'

//redux
import { fetchCurrentWeather } from './redux/weather/asyncActions'
import { weatherSelector } from './redux/weather/selectors'


const App = () => {
  const dispatch = useAppDispatch();
  const { units, lastQuery } = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchCurrentWeather({ units, cityname: lastQuery }));
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
      <Footer />
    </div>
  )
}
export default App
