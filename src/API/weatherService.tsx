import axios from 'axios'
import { WeatherItem } from '../redux/weather/types';

const DEFAULT_PATH_API = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const API_KEY = '6K8R8CWK3QZGR9R4W5B9FMNVF';

export type FetchWeatherProps = {
    units?: 'metric' | 'imperial' | 'standard',
    cityname?: string,
    countryCode?: string,
}

export const getCurrentWeather = async (units: 'metric' | 'imperial' | 'standard', cityname: string, countryCode: string) => {
    const { data } = await axios.get<WeatherItem>(`${DEFAULT_PATH_API}/${cityname},${countryCode}/today?unitGroup=${units}&key=${API_KEY}&contentType=json&include=current&lang=en`);
    console.log(data);
    return data;
}

export const getCountryCodeAPI = async (countryName: string) => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${countryName}?fullText=true`);
    return data;
}

