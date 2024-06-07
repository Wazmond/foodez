import { createSlice } from "@reduxjs/toolkit";

const initialState = {value: 0};

const recipePageStateSlice = createSlice({
    name: 'recipePageState',
    initialState,
    reducers: {
        recipes(state) {
            return {
                ...state,
                value: '1'
            }
        },
        ingredients(state) {
            return {
                ...state,
                value: '0'
            }
        },
    },
});

export const { recipes, ingredients } = recipePageStateSlice.actions

export default recipePageStateSlice.reducer