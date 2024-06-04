import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import IngSearch from './IngSearch.jsx'
import Inventory
 from './Inventory.jsx';
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
const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-around;
`;

export default function PantryPage() {
    return(
        <>
            <PantryPageContainer>
                <h1>INGREDIENTS</h1>
                <ContentContainer>
                    <Inventory />
                    <IngSearch />
                </ContentContainer>
            </PantryPageContainer>
        </>
    )
};


