import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'

const PantrySearchContainer = styled.div`
    font-size: 20px;
    width: 45%;
    height: 90%;
    display: flex;
    flex-direction: column;

    h2 {
        text-align: center;
    }
`;
const SearchContainer = styled.div`
    box-shadow: 0 5px 15px #686868;
    border-radius: 20px;
    margin: auto 0 0;
    width: 100%;
    height: 100%;
`;
const DividerLine = styled.div`
    width: 80%;
    height: 0px;
    border: 1px solid grey;
    margin: 0 auto;
`;
const PantrySearchInputBox = styled.input`
    font-size: 20px;
    text-align: center;
    width: 100%;
    height: 60px;
    border-radius: 20px;
    border: none;

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

function Ing_add() {
    // add to redux-persist
}

export default function PantrySearch() {
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const [APIresults, setAPIResults] = useState([]);

    useEffect(() => {
        const timeoutHandler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 1000);
        return () => {
            clearTimeout(timeoutHandler);
        };
    }, [inputValue]);

    useEffect(() => {
        debouncedValue == "" ? (setAPIResults([]), 
                            console.log("APIresults have been set to" + APIresults)
                        ) : (
                            FetchData(),
                            console.log("FetchData function is running now, Input Value is: " + inputValue + "...")
                        )
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
            console.log(data);
        } catch(error) {
            console.log(error)
        }
        setAPIResults(data.results);
        console.log("APIresults set as data.results");
    };

    return(
        <>
            <PantrySearchContainer>
                <SearchContainer>
                    <h2>Ingredient Search</h2>

                    <PantrySearchInputBox id="ing_input" placeholder='Search for items here...' value={inputValue} onChange={(e) => (setInputValue(e.target.value))}/>
                    <DividerLine />
                    <ResultContainer>
                        {APIresults == "" ? 
                            (<li>Please enter item into search box to begin.</li>) : 
                            (APIresults.length > 0 ? 
                                (APIresults.map((result, index) => (
                                    <SeachResultSpan><PantrySearchResults key={index} onClick={Ing_add} >{result.name}</PantrySearchResults></SeachResultSpan>
                                ))) : (
                                    <li>No results found...</li>
                                ))}
                    </ResultContainer>
                </SearchContainer>
            </PantrySearchContainer>
        </>
    );
};