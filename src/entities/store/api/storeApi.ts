import {baseApi} from "../../../shared/api/baseApi.ts";
import {DataToCreateProductI, DataToSearchProductListI, ProductListI} from "./model.ts";
import {Tags} from "../../../shared/api/tags.ts";
import {ProductType} from "../../../shared/model/model.ts";

export const storeApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getAllProducts: build.query<ProductListI, Partial<DataToSearchProductListI> | undefined >({
            query: (query) => ({
                url: 'products/search',
                params: { ...query }
            }),
            providesTags: [Tags.PRODUCTS]
        }),
        addProduct: build.mutation<ProductListI, DataToCreateProductI>({
            query: (body) => ({
                url: 'products/add',
                method: 'POST',
                body
            })
        }),
        getAllProductsFromCategory: build.query<ProductListI, string | undefined >({
            query: (category) => ({
                url: `products/category/${category}`
            }),
            providesTags: [Tags.PRODUCTS]
        }),
        getAllCategory: build.query<ProductType[], undefined >({
            query: () => ({
                url: `products/categories`
            }),
        }),
    })
})
export const {
    useGetAllCategoryQuery,
    useGetAllProductsQuery,
    useGetAllProductsFromCategoryQuery,
    useAddProductMutation
} = storeApi