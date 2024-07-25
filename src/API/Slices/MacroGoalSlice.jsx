import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    goal: []
};

const macroGoalSlice = createSlice({
    name: "macroGoalSlice",
    initialState,
    reducers: {
        setGoal(state, action) {
            return {
                ...state,
                goal: action.payload
            }
        }
    }
})

export const { setGoal } = macroGoalSlice.actions
export default macroGoalSlice.reducer 