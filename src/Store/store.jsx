import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/index'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import { thunk } from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, counterReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
});

export let persistor = persistStore(store)