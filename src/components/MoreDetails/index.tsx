import { Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"

//icons 
import SunIcon from '/WeatherIcons/clear-day.png'
import MoonIcon from '/WeatherIcons/clear-night.png'
import UVIndexIcon from '/WeatherIcons/uv-index.png'
import WindDirIcon from '/WeatherIcons/wind-dir.png'

//redux
import { weatherSelector } from "@/redux/weather/selectors"

//utils
import { convertToAMPM } from "@/utils/convertToAMPM"


const MoreDetails: React.FC = () => {
    const { currentWeather, currentDay } = useSelector(weatherSelector);
    console.log(currentWeather?.days[currentDay])
    return (
        <Stack
            alignItems='center'
            gap='40px 100px'
            display='flex'
            flexDirection='row'
            flexWrap='wrap'
        >
            <Stack display='flex' gap='16px' flexDirection='row' alignItems='center'>
                <img width={64} height={64} src={SunIcon} alt="sunrise" />
                <Stack display='flex' flexDirection='column'>
                    <Typography variant="h5">Sunrise</Typography>
                    <Typography variant="h6">
                        {currentWeather && convertToAMPM(currentWeather?.days[currentDay].sunrise, true)}
                    </Typography>
                </Stack>
            </Stack>

            <Stack display='flex' gap='16px' flexDirection='row' alignItems='center'>
                <img width={64} height={64} src={MoonIcon} alt="sunset" />
                <Stack display='flex' flexDirection='column'>
                    <Typography variant="h5">Sunset</Typography>
                    <Typography variant="h6">
                        {currentWeather && convertToAMPM(currentWeather?.days[currentDay].sunset, true)}
                    </Typography>
                </Stack>
            </Stack>

            <Stack display='flex' gap='16px' flexDirection='row' alignItems='center'>
                <img width={64} height={64} src={UVIndexIcon} alt="uv-index" />
                <Stack display='flex' flexDirection='column'>
                    <Typography variant="h5">UV Index</Typography>
                    <Typography variant="h6">
                        {currentWeather?.days[currentDay].uvindex}
                    </Typography>
                </Stack>
            </Stack>

            <Stack display='flex' gap='16px' flexDirection='row' alignItems='center'>
                <img
                    width={64}
                    height={64}
                    src={WindDirIcon}
                    alt="wind direction"
                    style={{ transform: `rotate(${currentWeather?.days[currentDay].winddir}deg)` }}
                />
                <Stack display='flex' flexDirection='column'>
                    <Typography variant="h5">Wind Direction</Typography>
                    <Typography variant="h6">
                        {currentWeather?.days[currentDay].winddir}°
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default MoreDetails