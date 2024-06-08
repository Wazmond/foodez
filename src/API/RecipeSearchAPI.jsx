import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipeSearchApi = createApi({
    reducerPath: 'recipeSearchApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.spoonacular.com/recipes/'}),
    endpoints: (builder) => ({
        getRecipesByIng: builder.query({
            query: ({ apiKey, searchQuery }) => ({
                url: "complexSearch",
                params: {
                    apiKey,
                    query: searchQuery,
                }
            }),
        }),
        getRecipesByNutrients: builder.query({
            query: () => 'findByNutrients',
        }),
    }),
});

export const { useGetRecipesByIngQuery } = recipeSearchApi
