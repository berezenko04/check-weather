import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCurrentWeather } from './asyncActions'
import { Status, WeatherItem, WeatherSliceState } from './types'

const initialState: WeatherSliceState = {
    currentWeather: null,
    currentDay: 0,
    status: Status.LOADING,
    units: 'metric',
    tempUnit: 'C',
    windUnit: 'km/h',
    visibilityUnit: 'km',
    lastQuery: 'Kyiv, UA'
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setUnits(state, action: PayloadAction<'metric' | 'us'>) {
            state.units = action.payload;
            if (state.units === 'metric') {
                state.tempUnit = 'C';
                state.windUnit = 'km/h';
                state.visibilityUnit = 'km'
            } else {
                state.tempUnit = 'F';
                state.windUnit = 'mph';
                state.visibilityUnit = 'miles'
            }
        },
        setCurrentDay(state, action: PayloadAction<number>) {
            state.currentDay = action.payload;
        },
        setLastQuery(state, action: PayloadAction<string>) {
            state.lastQuery = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentWeather.pending, (state) => {
            state.currentWeather = null;
            state.status = Status.LOADING;
        })

        builder.addCase(fetchCurrentWeather.fulfilled, (state, action: PayloadAction<WeatherItem>) => {
            state.currentWeather = action.payload;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchCurrentWeather.rejected, (state) => {
            state.currentWeather = null;
            state.status = Status.ERROR;
        })
    }
})

export const { setUnits, setCurrentDay, setLastQuery } = WeatherSlice.actions;

export default WeatherSlice.reducer;