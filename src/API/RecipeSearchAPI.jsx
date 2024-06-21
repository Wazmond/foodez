import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'

const apiKey = '2595d0356c9249378e7ae892d1368b16'


export const recipeSearchApi = createApi({
    reducerPath: 'recipeSearchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spoonacular.com/recipes/'}),
    keepUnusedDataFor: 120,
    endpoints: (builder) => ({
        getRecipesBySearch: builder.query({
            query: ({ searchQuery /*, ingredients */ }) => {
                // const incIngredients = Array.isArray(ingredients) ? ingredients.join() : '';
                return {
                    url: "complexSearch",
                    params: {
                        apiKey,
                        query: searchQuery,
                        // includeIngredients: incIngredients,
                        number: 100,
                    },
                };
            },
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
        getRecipesByIngredients: builder.query({
            query: ({ ingredients, ranking }) => ({
                url: 'findByIngredients',
                params: {
                    apiKey,
                    number: 100,
                    ingredients: ingredients,
                    ranking: ranking,
                    ignorePantry: true,
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

export const { useGetRecipesBySearchQuery, useGetRecipeInfoQuery, useGetRecipesByIngredientsQuery } = recipeSearchApi