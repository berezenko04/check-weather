import { Stack, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'

//styles
import styles from './Summary.module.scss'

//components
import WeatherIcon from '../WeatherIcon'

//redux
import { weatherSelector } from '@/redux/weather/selectors'


const Summary: React.FC = () => {
    const theme = useTheme()
    const { currentWeather, currentDay, tempUnit, windUnit, visibilityUnit } = useSelector(weatherSelector);
    const weatherValues = [
        { title: 'Wind', value: `${currentWeather?.days[currentDay].windspeed} ${windUnit}` },
        { title: 'Humidity', value: `${currentWeather?.days[currentDay].humidity.toFixed(0)}%` },
        { title: 'Visibility', value: `${currentWeather?.days[currentDay].visibility.toFixed(0)} ${visibilityUnit}` },
        { title: 'Pressure', value: `${currentWeather?.days[currentDay].pressure.toFixed(0)} mb` },
        { title: 'Dew Point', value: `${currentWeather?.days[currentDay].dew.toFixed(0)}°${tempUnit}` },
    ]

    return (
        <div className={styles.summary}>
            <Stack direction='column' spacing='32px'>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                    spacing='32px'
                >
                    <Stack direction='row' alignItems='center' spacing='24px'>
                        {currentWeather && <WeatherIcon condition={currentWeather.days[currentDay].icon} />}
                        <Stack direction='column' spacing='8px' width='240px'>
                            <Typography variant='h3'>
                                {currentWeather && Math.round(currentWeather.days[currentDay].tempmax)}°{tempUnit}
                            </Typography>
                            <Typography variant='h3' fontWeight='400 !important'>
                                {currentWeather && Math.round(currentWeather.days[currentDay].tempmin)}°{tempUnit}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction='column' spacing='8px' width='100%'>
                        <Typography variant='h4' textTransform='capitalize'>
                            {currentWeather?.days[currentDay].conditions}
                        </Typography>
                        <Typography fontSize='24px'>
                            Feels like {currentWeather && Math.round(currentWeather.days[currentDay].feelslike)}°{tempUnit}
                        </Typography>
                    </Stack>
                </Stack>
                <div className={styles.summary__info}>
                    {weatherValues.map((item, index) => (
                        <Stack direction='column' spacing='8px' width='100%' key={index}>
                            <Typography color={theme.palette.secondary.light}>{item.title}</Typography>
                            <Typography variant='h5'>{item.value}</Typography>
                        </Stack>
                    ))}
                </div>
            </Stack>
        </div>
    )
}

export default Summary