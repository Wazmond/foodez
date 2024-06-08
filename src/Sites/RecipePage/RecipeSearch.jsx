import  { useGetRecipesByIngQuery } from '../../API/RecipeSearchAPI'
import styled from 'styled-components'
import downArrow from '../../Images/double-down-arrow.png'
import upArrow from '../../Images/double-up-arrow.png'
import { useState } from 'react';

const Page = styled.div`
    height: 100%;
    width: 100%;
    font-family: roboto-thin;
    h1 {
        text-align: center;
    }
`;

const SearchBox = styled.input``;

const SearchFilterToggle = styled.button``;
const SearchFilterImg = styled.img`
    height:24px;
    width: 24px;
`;
/* checkboxes
Ingredients Only
Ingredients + missings
No Ingredients
Recipes by nutrient pref ( e.g more protein etc )
Dietary reqs + allergies
*/
// let searchQuery = document.getElementById('searchInput').value;



export default function RecipesPage() {   
    const [dropDown, setDropDown] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleInput(e) {
        e.keyCode == 13 ? setInputValue(document.getElementById('searchInput').value) : [];
    }
    
    return (
        <>
            <Page>
                <h1>RECIPES</h1>
                <SearchBox placeholder='Search recipes here...' id="searchInput" onKeyDown={handleInput} />
                <SearchFilterToggle onClick={() => {setDropDown(!dropDown)}}>
                    {dropDown == false ? <SearchFilterImg src={downArrow} /> : <SearchFilterImg src={upArrow} />}
                </SearchFilterToggle>
                <RecipeLayout inputValue={inputValue}/>
            </Page>
        </>
    )
}

const RecipesContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const GridContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    /* overflow-y: hidden; */

    height: 100%;
    width: 100%;
`;

const RecipeLayout = ({ inputValue }) => {
    const apiKey = '2595d0356c9249378e7ae892d1368b16';
    const data = ['1', '2', '3'];
    const results = data;
    
    // const { data } = useGetRecipesByIngQuery({ apiKey, inputValue});
    // const results = data ? data.results : [] ;
    console.log("refetch");
    console.log("input value is: " + inputValue + ".");

    return( 
        <RecipesContainer>
            <GridContainer>
                {results === null ? <p>No results were found...</p> : results.map((result) => {
                    return(
                        <RecipeGrid 
                        title={result.title} 
                        imgLink={result.image} 
                        key={result.id} 
                        id={result.id}
                    />
                    )
                })}
            </GridContainer>
        </RecipesContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex: 0 0 33.3333%;
    flex-direction: column;
    margin-bottom: 30px;
`;
const Card = styled.div`
    overflow: hidden;   
    border-radius: 10px;
    box-shadow: 0 5px 15px #686868;
    margin: 0 auto;
    width: 200px;
    height: 300px;
`;

const FoodImg = styled.img`
    width: 100%;
    height: 200px;
    margin: auto;
`;
const RecipeTitle = styled.h2``;

const RecipeGrid = ({title, imgLink}) => {
    return(
        <CardContainer>
            <Card>
                <FoodImg src={imgLink} alt={title} />
                <RecipeTitle>{title}</RecipeTitle>
            </Card>
        </CardContainer>
    )
}