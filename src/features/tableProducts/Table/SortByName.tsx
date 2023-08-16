import {useCallback} from 'react';
import {FilterContainer} from "./Table.styled.ts";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {ProductType} from "../../../shared/model/model.ts";
import { setSortBy } from '../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts';

export const SortByName = () => {

    const {products, sortBy, isLoading} = useAppSelector((state)=>state.tableProductsReducer)
    const productsCell = Object.keys(products?.[0] ?? {})

    const dispatch = useAppDispatch()

    const onChangeProductLabelChange = useCallback((event: SelectChangeEvent<string>)=>{
        dispatch(setSortBy(event.target.value as ProductType))
    },[])

    if (isLoading) return <></>

    return (
        <FilterContainer>
            <FormControl>
                <InputLabel >Select label for sorting</InputLabel>
                <Select
                    value={sortBy}
                    placeholder={sortBy}
                    onChange={onChangeProductLabelChange}
                    label="Select label for sorting"
                >
                    {productsCell?.map((key: string) => (
                        <MenuItem key={key} value={key}>
                            {key}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FilterContainer>
    );
};

