import { Box, Stack, Typography, useTheme } from "@mui/material"
import { useSelector } from "react-redux"

//components
import WeatherIcon from "../WeatherIcon"

//utils
import { formatDate } from "@/utils/formateDate"

//redux
import { weatherSelector } from "@/redux/weather/selectors"

type WeatherDayProps = {
    active: boolean,
    datetime: string,
    tempmin: number,
    tempmax: number,
    icon: string,
    index: number
}

const WeatherDay: React.FC<WeatherDayProps> = ({ active, datetime, tempmin, tempmax, icon, index }) => {
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
                    {index === 0 ? 'Today' : formatDate(datetime)}
                </Typography>
                <Stack direction='row' alignItems='center' spacing='32px'>
                    <Stack direction='row' alignItems='center' spacing='16px'>
                        <WeatherIcon condition={icon} />
                        <Stack direction='column'>
                            <Typography variant="h5">{tempmax.toFixed(0)}°{tempUnit}</Typography>
                            <Typography variant="h5" fontWeight='400 !important'>{tempmin.toFixed(0)}°{tempUnit}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box >
    )
}

export default WeatherDay