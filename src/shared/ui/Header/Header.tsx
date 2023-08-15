import {HeaderContainer, Logo, Navigation, NavLinkStyled} from './Header.styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Store App</Logo>
            <Navigation>
                <NavLinkStyled to='/'>Home</NavLinkStyled>
                <NavLinkStyled to='/create-product'>Create product</NavLinkStyled>
                <NavLinkStyled to='/edit-product'>Edit product</NavLinkStyled>
                <NavLinkStyled to='/cart'>Cart</NavLinkStyled>
            </Navigation>
        </HeaderContainer>
    );
};

