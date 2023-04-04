import { RootState } from "../store";

export const weatherSelector = (state: RootState) => state.weather.items;
export const statusSelector = (state: RootState) => state.weather.status;