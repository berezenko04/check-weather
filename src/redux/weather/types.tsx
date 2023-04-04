export interface WeatherSliceState {
    items: WeatherItem | null;
    status: Status.LOADING | Status.ERROR | Status.SUCCESS;
}

export interface WeatherItem {
    weather: {
        icon: string;
        main: string;
    };
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        temp_min: number;
        temp_max: number;
    };
    name: string;
    visibility: number;
    wind: {
        speed: number;
    };
    sys: {
        sunrise: number;
        sunset: number;
        country: string;
    };
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

