import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = '2595d0356c9249378e7ae892d1368b16'

export const recipeSearchApi = createApi({
    reducerPath: 'recipeSearchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spoonacular.com/recipes/'}),
    endpoints: (builder) => ({
        getRecipesByIng: builder.query({
            query: ({ searchQuery }) => ({
                url: "complexSearch",
                params: {
                    apiKey,
                    query: searchQuery,
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
    }),
});

export const { useGetRecipesByIngQuery } = recipeSearchApi
