export interface WeatherSliceState {
    currentWeather: WeatherItem | null;
    status: Status.LOADING | Status.ERROR | Status.SUCCESS;
    currentDay: number;
    units: 'metric' | 'us';
    tempUnit: 'C' | 'F';
    windUnit: 'km/h' | 'mph';
    visibilityUnit: 'km' | 'miles'
}

export interface WeatherItem {
    resolvedAddress: string;
    days: WeatherDay[]
    currentConditions: WeatherCurrent
}

interface WeatherDay extends WeatherCurrent {
    datetime: string;
    tempmin: number;
    tempmax: number;
    hours: WeatherHour[]
}

interface WeatherHour extends WeatherCurrent {
    datetime: string;
}

type WeatherCurrent = {
    temp: number;
    humidity: number;
    conditions: string;
    icon: string;
    feelslike: number;
    windspeed: number;
    pressure: number;
    visibility: number;
    dew: number;
}


export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

