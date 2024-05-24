import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

const PantrySearchContainer = styled.div`
    border: 2px solid red;
    font-size: 20px;
    width: 45%;
    height: 90%;
    h2 {
        text-align: center;
    }
`;
const PantrySearchInputBox = styled.input``;
const PantrySearchResults = styled.ul``;


export default function PantrySearch() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const [results, setResults] = useState('');

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 2000);

        return () => {
            clearTimeout(timeoutHandler);
        };
    }, [inputValue]);

    useEffect(() => {
        if(!inputValue == " ") {
            console.log("FetchData function is running now");
            FetchData();
        }
    }, [debouncedValue]);

    async function FetchData() {
        const API_key = "2595d0356c9249378e7ae892d1368b16";
        const ing_search = document.getElementById("ing_input").value.toLowerCase();
        console.log(ing_search);
        let data;
        try {
            const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?apiKey=${API_key}&query=${ing_search}`, {
                method: "GET",
                headers: {"Content-type": "application/json"}
            });
            if (!response.ok) {
                throw new Error("Could not fetch resource")
            }
            data = await response.json();
            console.log(data)
        } catch(error) {
            console.log(error)
        }
        setResults(data.results.map((result) => (result)));
    };

    return(
        <>
            <PantrySearchContainer>
                <h2>Pantry Search</h2>
                <PantrySearchInputBox id="ing_input" placeholder='Search for items here...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                {/* <button onClick={FetchData}>submit</button> */}
                <ResultContainer>
                    {results === "" ? (<li>Please enter item into search box to begin.</li>) : (results.length > 0 ? (results.map((result, index) => (<li key={index}>{result.value}</li>))) : (<li>No results found...</li>))}
                        <li>result 1</li>
                        <li>result 2</li>
                        <li>result 3</li>
                        <li>result 4</li>
                        <li>result 5</li>
                        <li>result 6</li>
                        <li>result 7</li>
                        <li>result 8</li>
                        <li>result 9</li>
                        <li>result 10</li>
                </ResultContainer>
            </PantrySearchContainer>
        </>
    );
};

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    padding: 10px;
    height: 30%;
    width: 90%;
    text-decoration: none;
    border: 2px solid purple;
    border-radius: 25px;

    margin: 0 auto;
`;



// async function FetchData() {
//     const app_id = "8a637636";
//     const app_key = "ab55b0a95b8f405d140595337a9178f1";
//     const ingredient = document.getElementById('ing_input').value.toLowerCase();
//     const searchQty = 3;
//     console.log(ingredient);

//     let autoData;
//     try {
//         const response = await fetch(`https://api.edamam.com/auto-complete?app_id=${app_id}&app_key=${app_key}&q=${ingredient}&limit=${searchQty}`)
//         if (!response.ok) {
//             const errorMessage = `Error : ${response.status}`;
//             throw new Error(errorMessage);
//         }
//         autoData = await response.json();
//         console.log("returning const autoData");
//         console.log(await autoData);
//     } catch (error) {
//         console.log(errorMessage)
//     };
//     const autofill = autoData.map((autoData) => (autoData));
//     console.log("autofill")

//     let foodData;
//     try {
//         const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${app_id}&app_key=${app_key}&ingr=${ingredient}`)
//         if (!response.ok) {
//             const errorMessage = `Error : ${response.status}`;
//             throw new Error(errorMessage);
//         }
//         foodData = await response.json();
//         console.log("returning const foodData");
//         console.log(await foodData);
//     } catch (error) {
//         console.log(errorMessage)
//     };
//     const foodSearch = foodData.hints.slice(0, 7).map((hints) => (hints.food.knownAs));
//     console.log("foodsearch");
//     console.log(foodSearch);
//     let ArrResults = [...autofill, ...foodSearch];
//     Results = ArrResults.map(result => result);
//     console.log('results');
//     console.log(Results);
// };