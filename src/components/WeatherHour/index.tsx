import { Box, Stack, Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux"

//components
import WeatherIcon from "../WeatherIcon"

//utils
import { convertToAMPM } from "@/utils/convertToAMPM"

//redux
import { weatherSelector } from "@/redux/weather/selectors"

type TWeatherHourProps = {
    active: boolean,
    datetime: string,
    temp: number,
    icon: string,
    conditions: string,
    feelslike: number,
    index: boolean
}

const WeatherHour: React.FC<TWeatherHourProps> = ({ active, datetime, temp, icon, conditions, feelslike, index }) => {
    console.log(index);
    const theme = useTheme();
    const backgroundOpacity = active ? 0.25 : 0.10;
    const { tempUnit } = useSelector(weatherSelector);
    return (
        <Box
            padding='32px'
            sx={{ backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`, userSelect: 'none' }}
            borderRadius='8px'
        >
            <Stack direction='column' spacing='24px'>
                <Typography
                    variant="h5"
                    color={active ? theme.palette.secondary.main : theme.palette.secondary.light}
                >
                    {index ? 'Now' : convertToAMPM(datetime)}
                </Typography>
                <Stack direction='row' alignItems='center' spacing='24px'>
                    <WeatherIcon condition={icon} />
                    <Typography variant="h3">{temp.toFixed(0)}°{tempUnit}</Typography>
                </Stack>
                <Stack direction='column' spacing='8px'>
                    <Typography variant="h6">{conditions}</Typography>
                    <Typography variant="h6">Feels like {feelslike.toFixed(0)}°{tempUnit}</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WeatherHour