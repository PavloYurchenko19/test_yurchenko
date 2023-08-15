import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import {Tags} from "./tags.ts";

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: [
        Tags.PRODUCTS
    ],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/'
    }),
    endpoints: () => ({})
})
