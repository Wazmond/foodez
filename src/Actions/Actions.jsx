export const ADD_INVENTORY = 'ADD_INVENTORY';

export const addInventory = (newResult) => ({
    type: ADD_INVENTORY,
    payload: newResult
})

export const CLEAR_INVENTORY = 'CLEAR_INVENTORY'
export const clearInventory = (newResult) => ({
    type: CLEAR_INVENTORY,
    payload: newResult,
})

export const REMOVE_ITEM = 'REMOVE_ITEM'
export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
})
