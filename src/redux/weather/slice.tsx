import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchWeather } from './asyncActions'
import { Status, WeatherItem, WeatherSliceState } from './types'

const initialState: WeatherSliceState = {
    items: null,
    status: Status.LOADING
}

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

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

export default WeatherSlice.reducer;