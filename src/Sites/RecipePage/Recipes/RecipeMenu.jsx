import { useEffect, useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    height: 100%;
    border-radius: 10px;
    background-color: #c5deff;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: auto;
    display: flex;
    flex-direction: column;

    padding: 25px;
    font-family: roboto-light;
    gap: 15px;
`;
const Image = styled.img`
    width: 250px;
    margin: 10px auto;
    border-radius: 10px;
`;
const Title = styled.h1`
    margin-bottom: 10px;
    text-align: center;
`;
const Section = styled.section``;
const Information = styled.h2`
    font-size: 20px;
`;
const NutritionsContainer = styled.p`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
const Nutritions = styled.p``;
const IngTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 3px;
`;
const IngredientsContainer = styled.div`
    border: 1px solid black;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
`;
const Ingredients = styled.p``;
const Methods = styled.p``;

export default function RecipeMenu({ recipeMenuData }) {
    if (!recipeMenuData)  {
        return <p>Loading...</p>
    }
    const calories = recipeMenuData.nutrition.nutrients.find(({name}) => name === "Calories");
    const fat = recipeMenuData.nutrition.nutrients.find(({name}) => name === "Fat");
    const carbohydrates = recipeMenuData.nutrition.nutrients.find(({name}) => name === "Carbohydrates");
    const protein = recipeMenuData.nutrition.nutrients.find(({name}) => name === "Protein");

    return (
        <Container>
            <Image src={recipeMenuData.image}/>
            <Title>{recipeMenuData.title}</Title>
            <Section>
                <Information>Nutritionional Information per Serving</Information>
                <NutritionsContainer>
                    <Nutritions>Calories: {calories.amount}{calories.unit}</Nutritions>
                    <Nutritions>Carbohydrates: {carbohydrates.amount}{carbohydrates.unit}</Nutritions>
                    <Nutritions>Fats: {fat.amount}{fat.unit}</Nutritions>
                    <Nutritions>Protein: {protein.amount}{protein.unit}</Nutritions>
                </NutritionsContainer>
            </Section>
            <Section>
                <IngTitle>Ingredients:</IngTitle>
                <IngredientsContainer>
                        {recipeMenuData.nutrition.ingredients.map((ingredient, index) => {
                            return (
                                <Ingredients key={index} >{ingredient.amount} {ingredient.unit} - {ingredient.name}</Ingredients>
                            )})
                        }
                </IngredientsContainer>
            </Section>
            <Methods>{recipeMenuData.instructions}</Methods>
        </Container>
    )
}

