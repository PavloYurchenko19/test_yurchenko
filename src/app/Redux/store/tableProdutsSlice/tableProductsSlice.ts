import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductMapedI} from "../../../../entities/store/api/model.ts";
import {ProductType, SortByType, SortOrderType} from "../../../../shared/model/model.ts";

interface ProductStateI {
    products: ProductMapedI[]
    sortBy: string,
    searchBy: SortByType,
    sortOrder: SortOrderType,
    searchQuery: string,
    isLoading: boolean,
    error: any
    selectedProductType: ProductType
}

const initialState: ProductStateI = {
    products: [],
    searchBy: 'name',
    sortBy: 'id',
    sortOrder: 'asc',
    searchQuery: '',
    isLoading: false,
    error: null,
    selectedProductType: 'laptops'
}

const tableProductsSlice = createSlice({
    name: 'tableProducts',
    initialState,
    reducers: {
        setSortBy: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<SortOrderType>) => {
            state.sortOrder = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setProductType: (state, action: PayloadAction<ProductType>) => {
            state.selectedProductType = action.payload;
        },
        setSearchBy: (state, action: PayloadAction<SortByType>) => {
            state.searchBy = action.payload;
        },
        setProducts: (state, action: PayloadAction<{products: ProductMapedI[], isLoading: boolean}>) => {
            state.products = action.payload.products;
            state.isLoading = action.payload.isLoading;
        },
    },
});

export const { setSortBy, setSearchBy, setSortOrder, setProductType, setProducts, setSearchQuery } = tableProductsSlice.actions;

const tableProductsReducer = tableProductsSlice.reducer;
export default  tableProductsReducer