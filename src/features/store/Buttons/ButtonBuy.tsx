import {Button, Icon} from "./Buttons.styled.ts";
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

export const ButtonBuy = () => {
    const navigate = useNavigate()

    const onClickBuy = useCallback(()=>{
        navigate('/cart')
    },[])

    return (
        <Button onClick={onClickBuy}>
            <Icon role="img" aria-label="Buy Icon">
                🛒
            </Icon>
            Buy
        </Button>
    );
};