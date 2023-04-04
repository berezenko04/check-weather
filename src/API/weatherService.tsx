import axios from 'axios'
import { WeatherItem } from '../redux/weather/types';

const DEFAULT_PATH_API = 'https://api.openweathermap.org';
const API_KEY = 'da96a0344945b766539d92afc1584149';

export type FetchWeatherProps = {
    units?: 'metric' | 'imperial' | 'standard',
    cityname?: string
}

export const getWeather = async (units: 'metric' | 'imperial' | 'standard', cityname: string) => {
    const { data } = await axios.get<WeatherItem>(`${DEFAULT_PATH_API}/data/2.5/weather?q=${cityname}&units=${units}&appid=${API_KEY}`);
    return data;
}
