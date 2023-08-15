import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: () => ({})
})
