import React, { useState } from 'react';
import styled from 'styled-components'
import PantryPage from './RecipePage/Ingredients.jsx'
import RecipesPage from './RecipePage/RecipeSearch.jsx';
import { useDispatch } from 'react-redux';
import recipePageStateSlice from '../API/Slices/RecipesSlice.jsx';
import { recipes, ingredients } from '../API/Slices/RecipesSlice.jsx';
import { useSelector } from 'react-redux';

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
    overflow: hidden;
`;

export default function Recipe() {
    const dispatch = useDispatch();
    let pageState = useSelector(state => state.recipePageState.value);
    return(
        <>
        <RecipeContainer>
            <RecipePage>
                <NavBar>
                    <NavRedirect href='#pantry' onClick={() => dispatch(ingredients()) } >INGREDIENTS</NavRedirect>
                    <NavRedirect href='#recipes' onClick={() => dispatch(recipes()) } >RECIPES</NavRedirect>
                </NavBar>
                <Page>
                    {pageState == 0 ? (<PantryPage />) : (<RecipesPage />) }
                </Page>
            </RecipePage>
        </RecipeContainer>
        </>
    )
}
