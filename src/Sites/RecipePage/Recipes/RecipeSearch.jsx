import  { useGetRecipesByIngQuery, useGetRecipeInfoQuery } from '../../../API/RecipeSearchAPI'
import styled from 'styled-components'
import downArrow from '../../../Images/double-down-arrow.png'
import upArrow from '../../../Images/double-up-arrow.png'
import { useCallback, useEffect, useState } from 'react';
import RecipeMenu from './RecipeMenu';
import { useSelector } from 'react-redux';

const Page = styled.div`
    height: 100%;
    width: 100%;
    font-family: roboto-thin;
    display: flex;
    flex-direction: column;
    h1 {
        text-align: center;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    padding: 0 5vw;
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
    background-color: #d3deff;
    height: 200px;
    width: 500px;
    flex-direction: column;
    padding: 5px 0;
    margin-bottom: 10px;
`;
const FiltersContainer = styled.div`
    display: flex;
    margin: 5px 0;
`;
const CheckBoxes = styled.input`
    height: 25px;
    width: 25px;
    margin: 0 15px;
`;
const CheckBoxTitle = styled.p`
    font-size: 25px;
`;
const Content = styled.div`
    display: flex;
    flex: 1;
    overflow: hidden;
    gap: 25px;
`;
const Recipe = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`;

export default function RecipesPage() {   
    const [dropDown, setDropDown] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const [isRecipeOpen, setIsRecipeOpen] = useState(false);
    const [ recipeMenuData, setRecipeMenuData ] = useState(null);
    const [invenItemsOnly, setInvenItemsOnly] = useState(null);

    const ingredients = state => state.persistedReducer.invenReducer.inventory;
    const inventory = useSelector(ingredients);

    const { data } = useGetRecipesByIngQuery({ searchQuery: inputValue, ingredients: (invenItemsOnly === true ? (inventory.name, console.log("fetching data with inven items" + inventory.name)) : [])});
    const results = data ? data.results : [] ;

    const [recipeId, setRecipeId] = useState('');
    const { data: recipeData } = useGetRecipeInfoQuery({ id: recipeId }, {skip: !recipeId});
    useEffect(() => {
        if (recipeData) {
            console.log("Recipe data fetched: ", recipeData);
            setRecipeMenuData(recipeData);
        }
    }, [recipeData]);

    function handleInput(e) {
        e.keyCode == 13 ? setInputValue(document.getElementById('searchInput').value) : [];
    }

    function updateRecipeMenu(id) {
        // console.log("id: " + id);
        if (id !== null) {
            console.log('id is not null so recipeId is being set as: ID' + id);
            setRecipeId(id);
            setIsRecipeOpen(true);
        }
    }

    function inventoryItemsOnly() {
        var inventoryOnly = document.getElementById('invenOnly');
        inventoryOnly.checked ? setInvenItemsOnly(true) : setInvenItemsOnly(false);
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
                <Content>
                    <Recipe>
                        {dropDown == true ? 
                            <DropDownContainer>
                                <FiltersContainer>
                                    <CheckBoxes type='checkbox' id="invenOnly" onClick={inventoryItemsOnly}/>
                                    <CheckBoxTitle>Available ingredients recipes only</CheckBoxTitle>
                                </FiltersContainer>
                                <FiltersContainer>
                                    <CheckBoxes type='checkbox' />
                                    <CheckBoxTitle>filter 1</CheckBoxTitle>
                                </FiltersContainer>
                                <FiltersContainer>
                                    <CheckBoxes type='checkbox' />
                                    <CheckBoxTitle>filter 2</CheckBoxTitle>
                                </FiltersContainer>
                            </DropDownContainer>
                        : []}

                        <RecipeLayout results={results} updateRecipeMenu={updateRecipeMenu}/>
                    </Recipe>

                    {isRecipeOpen && recipeMenuData &&
                        <RecipeMenu recipeMenuData={recipeMenuData}/> 
                    }
                </Content>
            </Page>
        </>
    )
}

const RecipesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
`;

const RecipeLayout = ({ results, updateRecipeMenu }) => {
    const handleRecipeMenu = (id, e) => {
        e.preventDefault();
        console.log('handling recipe menu');
        updateRecipeMenu(id);
    };

    return( 
        <RecipesContainer>
            {results === null ? <p>No results were found...</p> : results.map(({title, image, id}) => {
                return(
                    <RecipeGrid 
                        title={title} 
                        imgLink={image} 
                        key={id} 
                        id={id}
                        onClick={(e) => {handleRecipeMenu(id, e)}}
                    />
                )
            })}
        </RecipesContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex: 0 0 33.3333%;
    flex-direction: column;
    height: 350px;
`;
const Card = styled.div`
    overflow: hidden;   
    border-radius: 10px;
    box-shadow: 0 5px 15px #686868;
    margin: auto;
    width: 200px;
    height: 300px;
    padding: 5px;

    transition: all 50ms ease-out;
    &:hover{
        height: 330px;
        width: 220px;
        cursor: pointer;
        box-shadow: 0 10px 15px #575757;
    }
`;

const FoodImg = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 10px;
`;
const RecipeTitle = styled.h2`
    font-size: 1.8vmin;
    text-align: center;
`;

const RecipeGrid = ({title, imgLink, onClick}) => {
    return(
        <CardContainer>
            <Card onClick={onClick}>
                <FoodImg src={imgLink} alt={title} />
                <RecipeTitle>{title}</RecipeTitle>
            </Card>
        </CardContainer>
    )
}