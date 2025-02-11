import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authslice'
import jobReducer from './jobSlice'
export const store = configureStore({
    reducer:{
        auth:authReducer,
        job:jobReducer
    }
})