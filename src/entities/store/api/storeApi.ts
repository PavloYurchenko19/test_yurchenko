import {baseApi} from "../../../shared/api/baseApi.ts";
import {DataToFilterProductListI, ProductListI} from "./model.ts";
import {Tags} from "../../../shared/api/tags.ts";

export const storeApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getAllProducts: build.query<ProductListI, Partial<DataToFilterProductListI> | undefined >({
            query: (query) => ({
                url: 'products',
                params: { ...query }
            }),
            providesTags: [Tags.PRODUCTS]
        }),
    })
})
export const {
    useGetAllProductsQuery
} = storeApi