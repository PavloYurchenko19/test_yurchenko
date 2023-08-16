import {ProductMapedI} from "../../store/api/model.ts";

export interface TableCellPropsI {
    product?: ProductMapedI
}

export interface TableBodyRowPropsI {
    sortedAndFilteredProducts?: ProductMapedI[]
}