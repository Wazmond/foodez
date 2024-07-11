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

        },
        rmLog(state, action) {
            state.logs = state.logs.filter((log) => log.title !== action.payload.title);
        }
    },
})

export const { addLog, rmLog } = macroLogSlice.actions
export default macroLogSlice.reducer