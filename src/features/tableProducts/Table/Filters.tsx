import {
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField
} from "@mui/material";
import {ChangeEvent, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/Redux/store/appStore.ts";
import {
    setSearchBy,
    setSearchQuery,
    setSortOrder
} from "../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts";
import {SortByType, SortOrderType} from "../../../shared/model/model.ts";
import {FilterContainer} from "./Table.styled.ts";
import {useSortProducts} from "../../../entities/store/lib";
import {SearchByCategory} from "./SearchByCategory.tsx";

export const Filters = () => {
    const { searchQuery, searchBy, sortOrder } = useAppSelector((state)=>state.tableProductsReducer)

    const dispatch = useAppDispatch()
    useSortProducts()

    const onChangeProductName = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        dispatch(setSearchQuery(e.target.value))
    },[])

    const onChangeSortName = useCallback((_event: ChangeEvent<HTMLInputElement>, value: string)=>{
        dispatch(setSearchBy(value as SortByType))
    },[])

    const onChangeSortOrder = useCallback((_event: ChangeEvent<HTMLInputElement>, value: string)=>{
        dispatch(setSortOrder(value as SortOrderType))
    },[])

    return (
        <FilterContainer>

            {
                searchBy === 'name' ? <TextField
                    label="Filter by Name"
                    value={searchQuery}
                    onChange={onChangeProductName}
                    variant="outlined"
                    margin="normal"
                />
                    :  <SearchByCategory/>
            }
            <RadioGroup
                name="controlled-radio-buttons-search"
                value={searchBy}
                onChange={onChangeSortName}
                row
            >
                <FormControlLabel value="name" control={<Radio />} label="Name" />
                <FormControlLabel value="category" control={<Radio />} label="Category" />
            </RadioGroup>
            <RadioGroup
                name="controlled-radio-buttons-sort"
                value={sortOrder}
                onChange={onChangeSortOrder}
                row
            >
                <FormControlLabel value="asc" control={<Radio />} label="Asc" />
                <FormControlLabel value="desc" control={<Radio />} label="Desc" />
            </RadioGroup>
        </FilterContainer>
    );
};

