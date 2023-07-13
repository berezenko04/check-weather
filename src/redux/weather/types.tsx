export interface WeatherSliceState {
    currentWeather: WeatherItem | null;
    status: Status.LOADING | Status.ERROR | Status.SUCCESS;
    units: 'metric' | 'imperial';
    tempUnit: 'C' | 'F';
    windUnit: 'km/h' | 'mph';
    visibilityUnit: 'km' | 'miles'
}

export interface WeatherItem {
    resolvedAddress: string;
    days: {
        temp: number;
        tempmin: number;
        tempmax: number;
        humidity: number;
        conditions: string;
        icon: string;
        feelslike: number;
        windspeed: number;
        pressure: number;
        visibility: number;
        dew: number;
    }[];
    currentConditions: {
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
}


export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

