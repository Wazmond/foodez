import { useEffect, useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 50vw;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background-color: #c5deff;
    overflow-y: auto;
`;
const Image = styled.img`
    height: 200px;
    width: 200px;
    margin: 50px auto 0;
`;
const Title = styled.h1``;
const Description = styled.p``;
const Information = styled.p``;
const IngredientsContainer = styled.div`
    border: 1px solid black;
`;
const Ingredients = styled.p``;
const Methods = styled.p``;

export default function RecipeMenu({ recipeMenuData }) {
    if (!recipeMenuData)  {
        return <p>Loading...</p>
    }
    // console.log(recipeData.title);
    return (
        <Container>
            <Image src={recipeMenuData.image}/>
            <Title>{recipeMenuData.title}</Title>
            {/* <Description>{recipeMenuData.summary}</Description> */}
            <Information>Info of dish like nutrition</Information>
            <IngredientsContainer>
                    {recipeMenuData.nutrition.ingredients.map((ingredient, index) => {
                        return (
                            <Ingredients key={index} >{ingredient.amount} {ingredient.unit} - {ingredient.name}</Ingredients>
                        )})
                    }
            </IngredientsContainer>
            <Methods>{recipeMenuData.instructions}</Methods>
        </Container>
    )
}

