import { combineReducers } from '@reduxjs/toolkit'
import {baseApi} from "../../../shared/api/baseApi.ts";
import tableProductsReducer from '../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts';
import cartProductReducer from "./cartProductSlice/cartProductSlice.ts";

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    tableProductsReducer,
    cartProductReducer
})
