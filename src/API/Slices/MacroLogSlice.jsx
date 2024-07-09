import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',          
    mealType: '',
    calories: '',
    protein: '',
    fats: '',
    carbohydrates: '',
}

const macroLogSlice = createSlice({
    name: 'macroLogSlice',
    initialState,
    reducers: {
        addLog({ title, mealType, calories, protein, fats, carbohydrates }) {
            return {
                ...state,
                title,
                mealType,
                calories,
                protein,
                fats,
                carbohydrates
            }
        }
    },
})

export const { addLog } = macroLogSlice.actions
export default macroLogSlice.reducer