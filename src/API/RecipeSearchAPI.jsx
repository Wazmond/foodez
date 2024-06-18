import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = '2595d0356c9249378e7ae892d1368b16'


export const recipeSearchApi = createApi({
    reducerPath: 'recipeSearchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spoonacular.com/recipes/'}),
    keepUnusedDataFor: 120,
    endpoints: (builder) => ({
        getRecipesByIng: builder.query({
            query: ({ searchQuery, ingredients }) => ({
                url: "complexSearch",
                params: {
                    apiKey,
                    query: searchQuery,
                    includeIngredients: {ingredients},
                    number: 100,
                }
            }),
        }),
        getRecipesByNutrients: builder.query({
            query: ({ ingredients }) => ({
                url: 'findByNutrients',
                params:{
                    apiKey,
                    ingredients: ingredients,
                }
            })
        }),
        getRecipeInfo: builder.query({
            query: ({ id }) => ({
                url: `${id}/information`,
                params: {
                    apiKey,
                    includeNutrition: true,
                }

            })
        }),
    }),
});

export const { useGetRecipesByIngQuery, useGetRecipeInfoQuery } = recipeSearchApi