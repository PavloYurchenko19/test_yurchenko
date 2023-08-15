import {Button, Icon} from "./Buttons.styled.ts";
import {useCallback} from "react";
import * as React from "react";
import {AddButtonPropsI} from "../../../entities/store/model/model.ts";

export const AddButton: React.FC<AddButtonPropsI> = ({product}) => {
    const onClick = useCallback(()=>{
        console.log(product)
    },[product])
    return (
        <Button onClick={onClick}>
            <Icon role="img" aria-label="Add Icon">
                ➕
            </Icon>
            Add
        </Button>
    );
};