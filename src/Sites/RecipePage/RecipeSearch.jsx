import  { useGetRecipesByIngQuery } from '../../API/RecipeSearchAPI'
import styled from 'styled-components'


const Page = styled.div`
    height: 100%;
    width: 100%;
    h1 {
        text-align: center;
    }
`;
export default function RecipesPage() {
    let searchQuery = "pasta"; 
    const apiKey = '2595d0356c9249378e7ae892d1368b16';
    // const { data } = useGetRecipesByIngQuery({ apiKey, searchQuery});
    // console.log(data);
    {/* accessing the api will return
        - id
        - image
        - image type
        - title of recipe
    */}
   
    return (
        <>
            <Page>
                <h1>RECIPES</h1>
                <RecipeLayout />
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

    height: 100%;
    width: 100%;
    `;

const RecipeLayout = () => {
    return( 
        <RecipesContainer>
            <GridContainer>
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
                <RecipeGrid />
            </GridContainer>
        </RecipesContainer>
    )
}

const CardContainer = styled.div`
    /* border: 2px solid blue; */
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
`;
const RecipeTitle = styled.h2``;
const RecipeDesc = styled.p``;

const RecipeGrid = () => {
    return(
        <CardContainer>
            <Card>
                <FoodImg />
                <RecipeTitle>Title of Recipe</RecipeTitle>
                <RecipeDesc>Desc of Recipe</RecipeDesc>
            </Card>
        </CardContainer>
    )
}