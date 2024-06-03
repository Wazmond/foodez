import { createReducer } from "@reduxjs/toolkit";
import { SET_RESULT } from "../Actions";

const initialState = { result: '' };

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULT:
            return {
                ...state,
                result: action.payload
            }
        default:
            return state;
    }
}
export default resultReducer;

const inventoryReducer = createReducer([],  (builder) => {


})