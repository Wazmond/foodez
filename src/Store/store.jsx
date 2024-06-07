import { combineReducers, configureStore } from '@reduxjs/toolkit'
import invenReducer from '../Reducers/InventoryReducer'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import { recipeSearchApi } from '../API/RecipeSearchAPI'

const reducers = combineReducers({
    invenReducer,
    [recipeSearchApi.reducerPath]: recipeSearchApi.reducer,
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }).concat(recipeSearchApi.middleware),
});

export let persistor = persistStore(store)