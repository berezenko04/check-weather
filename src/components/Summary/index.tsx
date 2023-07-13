import { Stack, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'

//components
import WeatherIcon from '../WeatherIcon'

//utils
import { format12Hours } from '@/utils/format12Hours'
import { calculateDewPoint } from '@/utils/calculateDewPoint'

//redux
import { weatherSelector } from '@/redux/weather/selectors'


const Summary: React.FC = () => {
    const theme = useTheme()
    const { currentWeather, tempUnit, windUnit, visibilityUnit } = useSelector(weatherSelector);
    const weatherValues = [
        { title: 'Wind', value: `${currentWeather?.days[0].windspeed} ${windUnit}` },
        { title: 'Humidity', value: `${currentWeather?.days[0].humidity.toFixed(0)}%` },
        { title: 'Visibility', value: `${currentWeather?.days[0].visibility.toFixed(0)} ${visibilityUnit}` },
        { title: 'Pressure', value: `${currentWeather?.days[0].pressure.toFixed(0)} mb` },
        { title: 'Dew Point', value: `${currentWeather?.days[0].dew.toFixed(0)}°${tempUnit}` },
    ]
    return (
        <Stack direction='column' spacing='32px'>
            <Stack direction='row' alignItems='center' spacing='32px'>
                <Stack direction='row' alignItems='center' spacing='24px'>
                    {currentWeather && <WeatherIcon condition={currentWeather.days[0].icon} />}
                    <Stack direction='column' spacing='8px' width='240px'>
                        <Typography variant='h3'>
                            {currentWeather && Math.round(currentWeather.days[0].tempmax)}°{tempUnit}
                        </Typography>
                        <Typography variant='h3' fontWeight='400 !important'>
                            {currentWeather && Math.round(currentWeather.days[0].tempmin)}°{tempUnit}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction='column' spacing='8px' width='100%'>
                    <Typography variant='h4' textTransform='capitalize'>
                        {currentWeather?.days[0].conditions}
                    </Typography>
                    <Typography fontSize='24px'>
                        Feels like {currentWeather && Math.round(currentWeather.days[0].feelslike)}°{tempUnit}
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
    )
}

export default Summary