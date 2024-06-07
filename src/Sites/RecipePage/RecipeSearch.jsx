import  { useGetRecipesByIngQuery } from '../../API/RecipeSearchAPI'

export default function RecipesPage() {
    const { data } = useGetRecipesByIngQuery();

    console.log(data);
    
    return (
        <>
            <h1>Recipe</h1>
        </>
    )
}

// async function searchRecipe() {
//     const API_key = "2595d0356c9249378e7ae892d1368b16";
//     try {
//         const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         if (!response.ok) {
//             throw new Error("error")
//         }
//         data = await response.json();
//         console.log(data)
//     }catch(error) {
//         console.log(error)
//     }
// }
