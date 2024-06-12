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

const SearchContainer = styled.div`
    display: flex;
    /* flex-direction: row; */
    padding: 0 5vw;
    /* justify-content: center; */
    margin: 0 0 10px;
`;
const SearchBox = styled.input`
    height: 40px;
    width: 500px;
`;
const SearchFilterToggle = styled.button`
    height:40px;
    width:40px;
`;
const SearchFilterImg = styled.img`
    height: 100%;
    width: 100%;
`;
/* checkboxes
Ingredients Only
Ingredients + missings
No Ingredients
Recipes by nutrient pref ( e.g more protein etc )
Dietary reqs + allergies
*/
const DropDownContainer = styled.div`
    background-color: #779bff;
    height: 200px;
    width: 750px;
`;
const FiltersContainer = styled.div`
    display: flex;
`;
const CheckBoxes = styled.input`
    height: 25px;
    width: 25px;
    margin: 5px 15px;
`;
const CheckBoxTitle = styled.p`
font-size: 25px;
`;

export default function RecipesPage() {   
    const [dropDown, setDropDown] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const { data } = useGetRecipesByIngQuery({ searchQuery: inputValue });
    const results = data ? data.results : [] ;

    function handleInput(e) {
        e.keyCode == 13 ? setInputValue(document.getElementById('searchInput').value) : [];
    }

    return (
        <>
            <Page>
                <h1>RECIPES</h1>
                <SearchContainer>
                    <SearchBox placeholder='Search recipes here...' id="searchInput" onKeyDown={handleInput} />
                    <SearchFilterToggle onClick={() => {setDropDown(!dropDown)}}>
                        {dropDown == false ? <SearchFilterImg src={downArrow} /> : <SearchFilterImg src={upArrow} />}
                    </SearchFilterToggle>
                </SearchContainer>
                {dropDown == true ? 
                            <DropDownContainer>
                                <FiltersContainer>
                                    <CheckBoxes type='checkbox' />
                                    <CheckBoxTitle>Available ingredients recipes only</CheckBoxTitle>
                                </FiltersContainer>
                            </DropDownContainer> : []}
                <RecipeLayout results={results}/>
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

const RecipeLayout = ({ results }) => {
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