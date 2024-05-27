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

    &:focus {
        outline: none;
    }
`;
const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    /* height: 30%; */
    width: 90%;
    text-decoration: none;
    /* border: 2px solid purple; */
    border-radius: 25px;
    margin: 0 auto;
    list-style-type: none;

    color: black;
    font-family: roboto-regular;
    font-size: 25px;
`;

const SeachResultSpan = styled.span`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;

    padding-left: 15px;

    &:hover {
        background-color: lightgrey;
        border-radius: 5px;
    }
    `;

const PantrySearchResults = styled.label`

`;

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

