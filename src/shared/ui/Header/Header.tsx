import {HeaderContainer, Logo, Navigation, NavLinkStyled} from './Header.styled';
import {useAppDispatch} from "../../../app/Redux/store/appStore.ts";
import {useCallback} from "react";
import {setSearchBy} from "../../../app/Redux/store/tableProdutsSlice/tableProductsSlice.ts";

export const Header = () => {
    const dispatch = useAppDispatch()

    const onClick = useCallback(()=>{
        dispatch(setSearchBy('name'))
    },[])

    return (
        <HeaderContainer>
            <Logo>Store App</Logo>
            <Navigation>
                <NavLinkStyled onClick={onClick}  to='/'>Home</NavLinkStyled>
                <NavLinkStyled to='/create'>Create product</NavLinkStyled>
                <NavLinkStyled to='/table'>Table</NavLinkStyled>
                <NavLinkStyled to='/cart'>Cart</NavLinkStyled>
            </Navigation>
        </HeaderContainer>
    );
};

