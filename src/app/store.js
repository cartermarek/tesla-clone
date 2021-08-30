import { configureStore } from '@reduxjs/toolkit'
import carReducer from '../features/car'

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});