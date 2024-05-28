import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/index'

const Store = configureStore({
    reducer: counterReducer,
});

export default Store