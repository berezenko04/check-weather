import axios from 'axios'
import { WeatherItem } from '@/redux/weather/types';

const DEFAULT_PATH_API = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';
const API_KEY = '6K8R8CWK3QZGR9R4W5B9FMNVF';

export type FetchWeatherProps = {
    units?: 'metric' | 'us',
    cityname?: string,
    countryCode?: string,
}

export const getCurrentWeather = async (units: 'metric' | 'us', cityname: string, countryCode: string) => {
    const params = new URLSearchParams({
        unitGroup: units,
        key: API_KEY,
        contentType: 'json',
        lang: 'en'
    })
    const { data } = await axios.get<WeatherItem>(`${DEFAULT_PATH_API}/${cityname},${countryCode}/next7days?${params.toString()}`);
    return data;
}

export const getCountryCodeAPI = async (countryName: string) => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${countryName}?fullText=true`);
    return data;
}

