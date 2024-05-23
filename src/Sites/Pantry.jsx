import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PantrySearch from './Contents/PantrySearch.jsx'

const PantryContainer = styled.div``;

const PantryInventoryContainer = styled.div`
    border: 2px solid blue;
`;
// const PantryInventoryTextBox = styled.input``;
const PantryInventory = styled.ol`
    border: 2px solid black;
`;

export default function PantryPage() {
    return(
        <>
            <PantryContainer>
                <h1>PANTRY</h1>
                <PantryInventoryContainer>
                    <h2>Current Inventory</h2>
                    <PantryInventory>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                        <li>item 5</li>
                    </PantryInventory>
                </PantryInventoryContainer>
                <PantrySearch />
            </PantryContainer>
        </>
    )
};


