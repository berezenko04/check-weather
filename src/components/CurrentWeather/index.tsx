import { Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'

//styles
import styles from './CurrentWeather.module.scss'

//utils
import { format12Hours } from '@/utils/format12Hours'

//icons
import SunCloudsImg from '/WeatherImages/sun-clouds.jpg'

//components
import WeatherIcon from '../WeatherIcon'

//redux
import { weatherSelector } from '@/redux/weather/selectors'
import WeatherImage from '../WeatherImage'


const CurrentWeather: React.FC = () => {
    const theme = useTheme()
    const { currentWeather, tempUnit, windUnit, visibilityUnit } = useSelector(weatherSelector);
    const weatherValues = [
        { title: 'Wind', value: `${currentWeather?.currentConditions.windspeed} ${windUnit}` },
        { title: 'Humidity', value: `${currentWeather?.currentConditions.humidity.toFixed(0)}%` },
        { title: 'Visibility', value: `${currentWeather?.days[0].visibility.toFixed(0)} ${visibilityUnit}` },
        { title: 'Pressure', value: `${currentWeather?.currentConditions.pressure.toFixed(0)} mb` },
        { title: 'Dew Point', value: `${currentWeather?.currentConditions.dew.toFixed(0)}°${tempUnit}` },
    ]

    return (
        <div className={styles.currentWeather}>
            {currentWeather &&
                <WeatherImage
                    condition={currentWeather.currentConditions.icon}
                />}
            <Stack direction='column' spacing='32px'>
                <Stack direction='column' spacing='8px'>
                    <Typography textTransform='uppercase' variant='h4'>
                        Current Weather
                    </Typography>
                    <Typography textTransform='uppercase' variant='h5'>
                        {currentWeather?.resolvedAddress} - {format12Hours(new Date())}
                    </Typography>
                </Stack>
                <Stack direction='row' alignItems='center' spacing='32px'>
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        {currentWeather && <WeatherIcon condition={currentWeather.currentConditions.icon} />}
                        <Typography variant='h3' width='240px'>
                            {currentWeather && Math.round(currentWeather.currentConditions.temp)}°{tempUnit}
                        </Typography>
                    </Stack>
                    <Stack direction='column' spacing='8px' width='100%'>
                        <Typography variant='h4' textTransform='capitalize'>
                            {currentWeather?.currentConditions.conditions}
                        </Typography>
                        <Typography fontSize='24px'>
                            Feels like {currentWeather && Math.round(currentWeather.currentConditions.feelslike)}°{tempUnit}
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