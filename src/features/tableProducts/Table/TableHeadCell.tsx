import React from 'react';
import {TableCell as TableCellMui, TableHead, TableRow} from "@mui/material";
import { TableCellPropsI } from '../../../entities/tableProducts/model';

export const TableHeadCell: React.FC<TableCellPropsI> = ({product}) => {
    if (!product) return <></>

    const headerCell = Object.keys(product)

    return (
        <TableHead>
            <TableRow>
                {headerCell.map((column) => <TableCellMui key={column}>{column}</TableCellMui>)}
            </TableRow>
        </TableHead>

    );
};

