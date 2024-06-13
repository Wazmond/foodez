import { createSlice } from "@reduxjs/toolkit";

const recipeMenuSlice = createSlice({
    name: 'recipeMenuSlice',
    initialState: 'false',
    reducers: {
        menuOpen(state) {
            return{
                ...state,
                value: true
            }
        },
        menuClose(state) {
            return{
                ...state,
                value: false
            }
        },
    },
})

export const { menuOpen, menuClose } = recipeMenuSlice.actions
export default recipeMenuSlice.reducer