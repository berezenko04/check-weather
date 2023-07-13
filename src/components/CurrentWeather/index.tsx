import { Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'

//styles
import styles from './CurrentWeather.module.scss'

//utils
import { format12Hours } from '@/utils/format12Hours'
import { calculateDewPoint } from '@/utils/calculateDewPoint'

//icons
import SunCloudsImg from '/WeatherImages/sun-clouds.jpg'

//components
import WeatherIcon from '../WeatherIcon'

//redux
import { weatherSelector } from '@/redux/weather/selectors'

const CurrentWeather: React.FC = () => {
    const theme = useTheme()
    const { items, tempUnit, windUnit, windUnitCoefficient, visibilityUnit } = useSelector(weatherSelector);
    const weatherValues = [
        { title: 'Wind', value: `${items && Math.round(items.wind.speed * windUnitCoefficient)} ${windUnit}` },
        { title: 'Humidity', value: `${items?.main.humidity}%` },
        { title: 'Visibility', value: `${items && (items?.visibility / 1000).toFixed(0)} ${visibilityUnit}` },
        { title: 'Pressure', value: `${items?.main.pressure} mb` },
        { title: 'Dew Point', value: `${items && calculateDewPoint(items.main.temp, items.main.humidity)}°${tempUnit}` },
    ]
    console.log(items);
    return (
        <div className={styles.currentWeather}>
            <img className={styles.currentWeather__image} src={SunCloudsImg} alt="" />
            <Stack direction='column' spacing='32px'>
                <Stack direction='column' spacing='8px'>
                    <Typography textTransform='uppercase' variant='h4'>
                        Current Weather
                    </Typography>
                    <Typography textTransform='uppercase' variant='h5'>
                        {items?.sys.country}, {items?.name} - {format12Hours(new Date())}
                    </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing='32px'>
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        {items?.weather && <WeatherIcon condition={items.weather[0].main} />}
                        <Typography variant='h3' width='240px'>
                            {items?.main && Math.round(items.main.temp)}°{tempUnit}
                        </Typography>
                    </Stack>
                    <Stack direction='column' spacing='8px' width='100%'>
                        <Typography variant='h4' textTransform='capitalize'>
                            {items?.weather[0].main}
                        </Typography>
                        <Typography fontSize='24px'>
                            Feels like {items?.main && Math.round(items.main.feels_like)}°{tempUnit}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing='32px'>
                    {weatherValues.map((item, index) => (
                        <Stack direction='column' spacing='8px' width='100%' key={index}>
                            <Typography color={theme.palette.secondary.light}>{item.title}</Typography>
                            <Typography variant='h5'>{item.value}</Typography>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </div>
    )
}

export default CurrentWeather