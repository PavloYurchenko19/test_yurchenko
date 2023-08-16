import {Button, Icon} from "./Buttons.styled.ts";
import {useCallback} from "react";
import * as React from "react";
import {AddButtonPropsI} from "../../../entities/store/model/model.ts";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {addProduct, deleteProduct} from "../../../app/Redux/store/cartProductSlice/cartProductSlice.ts";

export const AddButton: React.FC<AddButtonPropsI> = ({product}) => {
    const dispatch = useAppDispatch()
    const addedProducts = useAppSelector(state => state.cartProductReducer.productsInCart)

    const onClickAdd = useCallback(()=>{
        dispatch(addProduct(product))
    },[product])

    const onClickDelete = useCallback(()=>{
        dispatch(deleteProduct(product.id))
    },[product])

    return (
        <>
            {!addedProducts?.find(({id}) => id === product.id) ?
                <Button onClick={onClickAdd}>
                    <Icon role="img" aria-label="Add Icon">
                        ➕
                    </Icon>
                    Add
                </Button> :
                <Button onClick={onClickDelete}>
                    <Icon role="img" aria-label="Add Icon">
                        ➖
                    </Icon>
                    Remove
                </Button>
            }
        </>

    );
};