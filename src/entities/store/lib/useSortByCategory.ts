import {useEffect, useMemo} from "react";
import {ProductMapedI} from "../api/model.ts";
import {useGetAllProductsFromCategoryQuery} from "../api/storeApi.ts";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {setProducts} from "../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts";

export const useSortByCategory = () =>{
    const { selectedProductType: category, searchBy, sortOrder, sortBy} = useAppSelector((state)=>state.tableProductsReducer)

    const dispatch = useAppDispatch()

    const {data: products, isLoading, isFetching} = useGetAllProductsFromCategoryQuery(category)

    const sortedAndFilteredProducts = useMemo(()=>{
        if (searchBy !== 'category') return
        if (!products) []

        const filteredProducts = products?.products.map((value)=>{
            return{
                id: value.id,
                name: value.title,
                description: value.description,
                img: value.thumbnail,
                rating: value.rating,
                price: value.price,
                stock: value.stock,
                category: value.category,
            }
        });

        return filteredProducts?.sort((a: ProductMapedI, b: ProductMapedI) => {
            if ( sortOrder && sortBy) {
                const comparison = (a as Record<any, any>)[sortBy] >(b as Record<any, any>)[sortBy] ? 1 : (a as Record<any, any>)[sortBy] < (b as Record<any, any>)[sortBy]? -1 : 0
                return sortOrder === "asc" ? comparison : -comparison;
            }
            return 0;
        });

    },[products, sortOrder, searchBy, sortBy])

    useEffect(() => {
        dispatch(setProducts({
            products: sortedAndFilteredProducts ?? [],
            isLoading: isLoading || isFetching
        }))
    }, [sortedAndFilteredProducts,isLoading,isFetching]);
}