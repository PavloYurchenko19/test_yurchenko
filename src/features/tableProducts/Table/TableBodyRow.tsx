import React, {useCallback} from 'react';
import {Button, TableBody, TableCell, TableRow} from "@mui/material";
import { TableBodyRowPropsI } from '../../../entities/tableProducts/model';
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {addProduct, deleteProduct} from "../../../app/Redux/store/cartProductSlice/cartProductSlice.ts";
import {ProductMapedI} from "../../../entities/store/api/model.ts";

export const TableBodyRow: React.FC<TableBodyRowPropsI> = ({sortedAndFilteredProducts}) => {
    const addedProducts =  useAppSelector((state)=>state.cartProductReducer.productsInCart)
    const dispatch = useAppDispatch()

    const onClickAddProduct = useCallback((product: ProductMapedI)=>{
        dispatch(addProduct(product))
    },[])

    const onClickDelete = useCallback((product: ProductMapedI)=>{
        dispatch(deleteProduct(product.id))
    },[])

    return (
        <TableBody>
            {sortedAndFilteredProducts?.map((product) => (
                <TableRow key={product.id}>
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                        <img src={product.img} alt={product.name} style={{ maxWidth: '50px' }} />
                    </TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    {
                        !addedProducts?.find(({ id}) => id === product.id)
                            ? <TableCell><Button onClick={()=>onClickAddProduct(product)}> add product</Button></TableCell>
                            : <TableCell><Button onClick={()=>onClickDelete(product)}> delete product</Button></TableCell>

                    }

                </TableRow>
            ))}
        </TableBody>
    );
};

