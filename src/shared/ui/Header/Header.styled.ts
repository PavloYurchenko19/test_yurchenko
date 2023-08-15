import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  font-size: 18px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333; 
  font-weight: bold; 
  transition: all .4s;
  &:hover {
    color: cornflowerblue;
  }
`