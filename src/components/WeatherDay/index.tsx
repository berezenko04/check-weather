import { Box, Stack, Typography, useTheme } from "@mui/material"

//components
import WeatherIcon from "../WeatherIcon"

type WeatherDayProps = {
    active: boolean
}

const WeatherDay: React.FC<WeatherDayProps> = ({ active }) => {
    const theme = useTheme();
    const backgroundOpacity = active ? 0.25 : 0.10;
    console.log(active);
    return (
        <Box
            padding='32px'
            sx={{ backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})` }}
            borderRadius='8px'
        >
            <Stack direction='column' spacing='24px'>
                <Typography
                    variant="h5"
                    color={active ? theme.palette.secondary.main : theme.palette.secondary.light}
                >
                    Wed 13
                </Typography>
                <Stack direction='row' alignItems='center' spacing='16px'>
                    <WeatherIcon condition='rain' />
                    <Stack direction='column'>
                        <Typography variant="h5">22°C</Typography>
                        <Typography variant="h5" fontWeight='400 !important'>11°C</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default WeatherDay