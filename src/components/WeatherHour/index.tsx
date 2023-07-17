import { Box, Stack, Typography, useTheme } from "@mui/material"

//components
import WeatherIcon from "../WeatherIcon"

//utils
import { convertToAMPM } from "@/utils/convertToAMPM"

type WeatherHourProps = {
    active: boolean,
    datetime: string,
    temp: number,
    icon: string,
    conditions: string,
    feelslike: number,
    index: number
}

const WeatherHour: React.FC<WeatherHourProps> = ({ active, datetime, temp, icon, conditions, feelslike, index }) => {
    const theme = useTheme();
    const backgroundOpacity = active ? 0.25 : 0.10;
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
                    {index === 0 ? 'Now' : convertToAMPM(datetime)}
                </Typography>
                <Stack direction='row' alignItems='center' spacing='24px'>
                    <WeatherIcon condition={icon} />
                    <Typography variant="h3">{temp.toFixed(0)}°C</Typography>
                </Stack>
                <Stack direction='column' spacing='8px'>
                    <Typography variant="h6">{conditions}</Typography>
                    <Typography variant="h6">Feels like {feelslike.toFixed(0)}°C</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WeatherHour