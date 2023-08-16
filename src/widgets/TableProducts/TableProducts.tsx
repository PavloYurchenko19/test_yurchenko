import {Loader} from "../../shared/ui";
import {Paper, Table, TableContainer} from "@mui/material";
import {Filters, SortByName, TableBodyRow, TableHeadCell} from "../../features/tableProducts";
import {useAppSelector} from "../../app/Redux/store/appStore.ts";

export const TableProducts = () => {
    const { products, isLoading } = useAppSelector((state)=>state.tableProductsReducer)

    return (
        <div>
            <Filters/>
            <SortByName/>
            {
                isLoading ? <Loader/> :
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHeadCell product={products?.[0]}/>
                            <TableBodyRow sortedAndFilteredProducts={products}/>
                        </Table>
                    </TableContainer>
            }
            {!isLoading && !products?.length && <h1>Empty Table</h1> }


        </div>
    );
};

