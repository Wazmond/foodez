import { combineReducers, configureStore } from '@reduxjs/toolkit'
import invenReducer from '../Reducers/InventoryReducer'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REGISTER, PAUSE, PERSIST, PURGE, REHYDRATE, persistReducer, persistStore } from 'redux-persist'
import { recipeSearchApi } from '../API/RecipeSearchAPI'
import recipePageStateSlice from '../API/Slices/RecipesSlice'
import RecipeMenuSlice from '../API/Slices/RecipeMenuSlice'

const pReducers = combineReducers({
    invenReducer,
    recipePageState: recipePageStateSlice
})

// const reducers = combineReducers({
//  
//     RecipeMenuSlice
// })

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [recipeSearchApi],
}

const persistedReducer = persistReducer(persistConfig, pReducers)


export const store = configureStore({
    reducer: { 
        persistedReducer,
        // RecipeMenuSlice,
        [recipeSearchApi.reducerPath]: recipeSearchApi.reducer,
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }).concat(recipeSearchApi.middleware),
});

export let persistor = persistStore(store)