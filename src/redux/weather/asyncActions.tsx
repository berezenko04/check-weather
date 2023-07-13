import { FetchWeatherProps, getCurrentWeather } from "../../API/weatherService"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCurrentWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (params: FetchWeatherProps) => {
        const { units = 'metric', cityname = 'Kyiv', countryCode = 'UA' } = params;
        const weather = await getCurrentWeather(units, cityname, countryCode);
        return weather;
    }
)