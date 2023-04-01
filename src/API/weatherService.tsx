import axios from 'axios'

const DEFAULT_PATH_API = 'https://api.openweathermap.org/data/2.5/weather?q=Poltava&units=metric&appid=';
const API_KEY = 'da96a0344945b766539d92afc1584149';

export const getWeather = async () => {
    const { data } = await axios.get(`${DEFAULT_PATH_API}${API_KEY}`);
    return data;
}
