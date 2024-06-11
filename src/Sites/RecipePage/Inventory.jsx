import { useState, useEffect } from "react";
import styled from "styled-components";
import { clearInventory, removeItem } from '../../Actions/InvenPageActions'
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store/store";

const PantryInventoryContainer = styled.div`
    font-size: 20px;
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 15px #686868;
    border-radius: 20px;
    h2 {
        text-align: center;
    }
`;
const DividerLine = styled.div`
    width: 80%;
    height: 0px;
    border: 1px solid grey;
    margin: 0 auto;
`;

const PantryInventory = styled.ol`
    list-style-type: none;
    /* border: 2px solid blue; */
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    width: 90%;
    height: 100%;
    border-radius: 5px;
    text-decoration: none;
    margin: 0 auto;
    color: black;
    font-family: roboto-regular;
    font-size: 25px;

    background-color: #f6f6f6;

    label::first-letter {
        text-transform: capitalize;
    }
`;

const InventoryResultSpan = styled.span`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    &:hover {
        background-color: lightgrey;
        border-radius: 5px;
    }
`;
const InventoryResult = styled.label``;

const ClearItem = styled.button`
    height: 35px;
    width: 50px;
    margin: 0 15px 0 auto;
`;

const ClearInv = styled.button`
    margin: 25px auto;
    height: 50px;
    width: 300px;
`;

export default function Inventory() {
    const dispatch = useDispatch();

    function handleRmItem(item) {
        console.log("removing item: " + item.name);
        dispatch(removeItem(item));
    }


    const inventoryList = () => {
        const inventory = state => state.persistedReducer.invenReducer.inventory;
        const items = useSelector(inventory)
        const itemsList = Array.isArray(items) ? items.map((item) => {
            return (
                <InventoryResultSpan key={item.id}>
                    <InventoryResult >{item.name}</InventoryResult>
                    <ClearItem onClick={() => handleRmItem(item)}>X</ClearItem>
                </InventoryResultSpan>
            );
        }) : [];
        return (
            <PantryInventory>{itemsList}</PantryInventory>
        )
    };

    function handleRmAll() {
        console.log("Handling clear inventory button");
        dispatch(clearInventory());
    }

    return(
        <PantryInventoryContainer>
            <h2>Current Inventory</h2>
            <DividerLine />
            {inventoryList()}
            <ClearInv type="button" onClick={handleRmAll}>CLEAR ALL</ClearInv>
        </PantryInventoryContainer>
    );
};
