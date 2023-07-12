import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchWeather } from './asyncActions'
import { Status, WeatherItem, WeatherSliceState } from './types'

const initialState: WeatherSliceState = {
    items: null,
    units: 'metric',
    status: Status.LOADING,
    tempUnit: 'C',
    windUnit: 'km/h',
    windUnitCoefficient: 3.6,
    visibilityUnit: 'km'
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setUnits(state, action: PayloadAction<'metric' | 'imperial'>) {
            state.units = action.payload;
            if (state.units === 'metric') {
                state.tempUnit = 'C';
                state.windUnit = 'km/h';
                state.windUnitCoefficient = 3.6;
                state.visibilityUnit = 'km'
            } else {
                state.tempUnit = 'F';
                state.windUnit = 'mph';
                state.windUnitCoefficient = 1;
                state.visibilityUnit = 'miles'
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.items = null;
            state.status = Status.LOADING;
        })

        builder.addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherItem>) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        })

        builder.addCase(fetchWeather.rejected, (state) => {
            state.items = null;
            state.status = Status.ERROR;
        })
    }
})

export const { setUnits } = WeatherSlice.actions;

export default WeatherSlice.reducer;