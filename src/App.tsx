import { useAppDispatch } from './redux/store'
import { useEffect } from 'react'

//styles
import './scss/main.scss'

//components
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'

//redux
import { fetchWeather } from './redux/weather/asyncActions'


const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather({
      units: 'metric',
      cityname: 'Kyiv'
    }))
  }, [])

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <div className="container">
          <CurrentWeather />
        </div>
      </main>
    </div>
  )
}
export default App
