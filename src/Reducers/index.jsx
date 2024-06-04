import { createReducer } from "@reduxjs/toolkit";
import { CLEAR_INVENTORY, ADD_INVENTORY, REMOVE_ITEM } from "../Actions";

const initialState = {
    inventory: []
}

const invenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INVENTORY:
            return {
                ...state,
                inventory: [...state.inventory, action.payload]
            }
        case REMOVE_ITEM:
            return {
                ...state,
                inventory: state.inventory.filter((item) => item.name !== action.payload.name)
            }
        case CLEAR_INVENTORY:
            return initialState;
        default:
            return state;
    }
}
export default invenReducer;