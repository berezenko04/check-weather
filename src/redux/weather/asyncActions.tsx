import { FetchWeatherProps, getWeather } from "../../API/weatherService"
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (params: FetchWeatherProps) => {
        const { units = 'metric', cityname = 'Kyiv' } = params;
        const weather = await getWeather(units, cityname);
        return weather;
    }
)