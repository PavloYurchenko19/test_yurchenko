import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductMapedI} from "../../../../entities/store/api/model.ts";

interface initialStateI {
    productsInCart: ProductMapedI[]
}

const initialState: initialStateI = {
    productsInCart: []
};

const cartProductSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductMapedI>) => {
            state.productsInCart.push(action.payload);
        },
        deleteProduct: (state, action: PayloadAction<number>) => {
            state.productsInCart = state.productsInCart.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const productIndex = state.productsInCart.findIndex(product => product.id === id);
            if (productIndex !== -1) {
                state.productsInCart[productIndex] = { ...state.productsInCart[productIndex], ...updatedProduct };
            }
        },
    },
});

export const { addProduct, deleteProduct, updateProduct } = cartProductSlice.actions;
const cartProductReducer =  cartProductSlice.reducer;
export default cartProductReducer
