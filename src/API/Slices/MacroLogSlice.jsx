import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    logs: [],
};

const macroLogSlice = createSlice({
    name: 'macroLogSlice',
    initialState,
    reducers: {
        addLog(state, action) {
            state.logs.push(action.payload);

        }
    },
})

export const { addLog } = macroLogSlice.actions
export default macroLogSlice.reducer