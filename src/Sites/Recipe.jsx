import React, { useState } from 'react';
import styled from 'styled-components'
import PantryPage from './RecipePage/Pantry.jsx'

const RecipeContainer = styled.div`
    height: 100%;
    background-color: #0077ff;
    display: flex;
    justify-content : flex-end;
`;

const RecipePage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavBar = styled.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const NavRedirect = styled.nav`
    height: 40px;
    font-size: 30px;
    border: 2px solid black;
    padding: 2.5px 100px;
    margin-bottom: auto;
    border-radius: 10px;
    background-color: white;
    font-family: Roboto-Regular;

    &:hover {
        cursor: pointer;
    }
`;

const Page = styled.div`
    background-color: white;
    border-radius: 7px;
    height: 100%;
    width: 100%;
    align-self: center;
    margin: 0 0 auto;
`;

const RecipesPage = styled.div`

`;

export default function Recipe() {
    const [isPageDisplaying, setIsPageDisplaying] = useState(true);

    return(
        <>
        <RecipeContainer>
            <RecipePage>
                <NavBar>
                    <NavRedirect href='#pantry' onClick={() => setIsPageDisplaying(true)}>PANTRY</NavRedirect>
                    <NavRedirect href='#recipes' onClick={() => setIsPageDisplaying(false)}>RECIPES</NavRedirect>
                </NavBar>
                <Page>
                    {isPageDisplaying ? (<PantryPage />) : (<RecipesPage />) }
                </Page>
            </RecipePage>
        </RecipeContainer>
        </>
    )
}