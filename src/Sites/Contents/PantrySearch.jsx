import styled from 'styled-components'
import React, { useState } from 'react'

const PantrySearchContainer = styled.div`
    border: 2px solid red;
    font-size: 20px;
`;
const PantrySearchInputBox = styled.input``;
const PantrySearchResults = styled.ul``;


export default function PantrySearch() {
    function renderResult(result) {
        return (
            <>
                <li>{result}</li>
            </>
        )
    };

    return(
        <>
            <PantrySearchContainer>
                <h2>Pantry Search</h2>
                <PantrySearchInputBox id="ing_input" placeholder='Search for items here...'/>
                <button onClick={FetchData}>submit</button>
                <ResultContainer>
                    {/* <ResultsList>{Results.map((result) => renderResult(result))}</ResultsList> */}
                </ResultContainer>
            </PantrySearchContainer>
        </>
    );
};

const ResultContainer = styled.div``;
const ResultsList = styled.p``;

let Results;

async function FetchData() {
    const app_id = "8a637636";
    const app_key = "ab55b0a95b8f405d140595337a9178f1";
    const ingredient = document.getElementById('ing_input').value.toLowerCase();
    const searchQty = 3;
    console.log(ingredient);

    let autoData;
    try {
        const response = await fetch(`https://api.edamam.com/auto-complete?app_id=${app_id}&app_key=${app_key}&q=${ingredient}&limit=${searchQty}`)
        if (!response.ok) {
            const errorMessage = `Error : ${response.status}`;
            throw new Error(errorMessage);
        }
        autoData = await response.json();
        console.log("returning const autoData");
        console.log(await autoData);
    } catch (error) {
        console.log(errorMessage)
    };
    const autofill = autoData.map((autoData) => (autoData));
    console.log("autofill")

    let foodData;
    try {
        const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${ingredient}`)
        if (!response.ok) {
            const errorMessage = `Error : ${response.status}`;
            throw new Error(errorMessage);
        }
        foodData = await response.json();
        console.log("returning const foodData");
        console.log(await foodData);
    } catch (error) {
        console.log(errorMessage)
    };
    const foodSearch = foodData.hints.slice(0, 7).map((hints) => (hints.food.knownAs));
    console.log("foodsearch");
    console.log(foodSearch);
    let ArrResults = [...autofill, ...foodSearch];
    Results = ArrResults.map(result => result);
    console.log('results');
    console.log(Results);
};
