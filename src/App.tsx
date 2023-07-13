import { useAppDispatch } from './redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

//styles
import './scss/main.scss'

//components
import Navbar from './components/Navbar'
import CurrentWeather from './components/CurrentWeather'

//redux
import { fetchWeather } from './redux/weather/asyncActions'
import { weatherSelector } from './redux/weather/selectors'


const App = () => {
  const dispatch = useAppDispatch();
  const { units } = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchWeather({
      units,
    }))
  }, [units])

  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <div className="container">
          <CurrentWeather />
        </div>
      </main>
    </div>
  )
}
export default App
