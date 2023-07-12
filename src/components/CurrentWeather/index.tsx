import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

//styles
import styles from './CurrentWeather.module.scss'

//utils
import { format12Hours } from '@/utils/format12Hours'

//redux
import { weatherSelector } from '@/redux/weather/selectors'

const CurrentWeather: React.FC = () => {
    const weather = useSelector(weatherSelector);
    console.log(weather?.weather[0].main);
    return (
        <div className={styles.currentWeather}>
            <Box display='flex' flexDirection='column' gap='32px'>
                <Box display='flex' flexDirection='column' gap='8px'>
                    <Typography textTransform='uppercase' variant='h4' color='secondary'>
                        Current Weather
                    </Typography>
                    <Typography textTransform='uppercase' variant='h5' color='secondary'>
                        {weather?.sys.country}, {weather?.name} - {format12Hours(new Date())}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h3' color='secondary'>
                        {weather?.main && Math.round(weather.main.temp)}°C
                    </Typography>
                    <Typography variant='h5' color='secondary'>
                        {weather?.weather[0].main}
                    </Typography>
                    <Typography fontSize='24px' color='secondary'>
                        Feels like {weather?.main && Math.round(weather.main.feels_like)}°C
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default CurrentWeather