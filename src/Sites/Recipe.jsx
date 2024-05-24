import React, { useState } from 'react';
import styled from 'styled-components'
import PantryPage from './RecipePage/Pantry.jsx'

const RecipeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #0077ff;
    display: flex;
    justify-content : flex-end;
`;

const RecipePage = styled.div`
    height: 100%;
    width: 85vw;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1500px) {
        width: calc(100vw - 225px);
    }
`;

const NavBar = styled.div`
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const NavRedirect = styled.nav`
    font-size: 30px;
    border: 2px solid black;
    margin: 5.625px 0;
    padding: 2.5px 100px;
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
    height: 94.5%;
    width: 98%;
    align-self: center;
    margin: 0 0 auto;
`;

const PantryPages = styled.div`
    display: ${({ isPageDisplaying }) => (isPageDisplaying ? "flex" : "none")};
`;
const RecipesPage = styled.div`
    display: ${({ isPageDisplaying }) => (isPageDisplaying ? "none" : "flex")};
`;

export default function Recipe() {
    const [isPageDisplaying, setIsPageDisplaying] = useState();

    return(
        <>
        <RecipeContainer>
            <RecipePage>
                <NavBar>
                    <NavRedirect href='#pantry' onClick={() => setIsPageDisplaying(true)}>PANTRY</NavRedirect>
                    <NavRedirect href='#recipes' onClick={() => setIsPageDisplaying(false)}>RECIPES</NavRedirect>
                </NavBar>
                <Page>
                    <PantryPages id="pantry" isPageDisplaying={isPageDisplaying} />
                        <PantryPage />
                    <RecipesPage id="recipes" isPageDisplaying={isPageDisplaying}>
                        <h1>Recipes</h1>
                    </RecipesPage>
                </Page>
            </RecipePage>
        </RecipeContainer>
        </>
    )
}