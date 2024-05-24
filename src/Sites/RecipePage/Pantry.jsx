import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PantrySearch from './PantrySearch.jsx'

const PantryPageContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: Roboto-regular;

    h1 {
        font-size: 50px;
        text-align: center;
        letter-spacing: 6px;
        margin: 10px 0;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`;

const PantryInventoryContainer = styled.div`
    border: 2px solid blue;
    width: 45%;
    height: 90%;
`;
// const PantryInventoryTextBox = styled.input``;
const PantryInventory = styled.ol`
    border: 2px solid black;
`;

export default function PantryPage() {
    return(
        <>
            <PantryPageContainer>
                <h1>PANTRY</h1>
                <Container>
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
                </Container>
            </PantryPageContainer>
        </>
    )
};


