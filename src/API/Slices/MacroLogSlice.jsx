import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Calories: 0,
    Proteins: 0,
    Fats: 0,
    Carbohydrates: 0,
};

const macroLogSlice = createSlice({
    name: 'macroLogSlice',
    initialState,
    reducers: {
        addLog(state, action) {
            state.logs.push(action.payload);

        },
        rmLog(state, action) {
            state.logs = state.logs.filter((log) => log.id !== action.payload.id);
        }
    },
})

export const { addLog, rmLog } = macroLogSlice.actions
export default macroLogSlice.reducer