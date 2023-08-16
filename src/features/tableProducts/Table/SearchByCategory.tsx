import {useCallback} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {ProductType} from "../../../shared/model/model.ts";
import {setProductType} from "../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts";
import {useGetAllCategoryQuery} from "../../../entities/store/api/storeApi.ts";
import {FilterContainer} from "./Table.styled.ts";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {Loader} from "../../../shared/ui";
import {useSortByCategory} from "../../../entities/store/lib";

export const SearchByCategory = () => {
    const dispatch = useAppDispatch()
    const { selectedProductType, isLoading} = useAppSelector((state)=>state.tableProductsReducer)

    const {data:productTypes} = useGetAllCategoryQuery(undefined)

    useSortByCategory()

    const onChangeProductTypeChange = useCallback((event: SelectChangeEvent<ProductType>)=>{
        dispatch(setProductType(event.target.value as ProductType))
    },[])

    if (isLoading) return <Loader/>

    return (
        <FilterContainer>
            <FormControl>
                <InputLabel >Select Product Type</InputLabel>
                <Select
                    value={selectedProductType}
                    placeholder={productTypes?.[0]}
                    defaultValue={productTypes?.[0]}
                    onChange={onChangeProductTypeChange}
                    label="Select Product Type"
                >
                    {productTypes?.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </FilterContainer>
    );
};

