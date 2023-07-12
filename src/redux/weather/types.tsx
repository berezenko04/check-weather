import { WeatherIconProps } from "@/components/WeatherIcon";

export interface WeatherSliceState {
    items: WeatherItem | null;
    status: Status.LOADING | Status.ERROR | Status.SUCCESS;
    units: 'metric' | 'imperial';
    tempUnit: 'C' | 'F';
    windUnit: 'km/h' | 'mph';
    windUnitCoefficient: 3.6 | 1;
    visibilityUnit: 'km' | 'miles'
}

export interface WeatherItem {
    weather: WeatherSecondItem[];
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

type WeatherSecondItem = {
    main: string;
    description: string;
    icon: string;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

