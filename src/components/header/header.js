import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HEADERID = styled.header`
    padding: 20px 0;
    background: blue;
`;

export const CONTAINER = styled.div`
    width: 90%;
    margin: 0 auto;
`;

 const CONTAINERHEADER = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LOGO = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 600
`;

const NAVBAR = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
        display: none;
    }
`;

const BTN = styled.button`
    color: white;
    background: red;
    padding: 15px 25px;
    border-radius: 6px;
    &:hover {
        background: black;
    }
    @media (max-width: 992px) {
        display: none;
    }
`;

const LINKHOME = styled.a`
    color: white;
    padding: 0 20px;
    font-size: 18px;
    transition: .4s;
    &:hover {
        text-decoration: underline;
    }
`

const Header = () => {
    return (
        <HEADERID id="header">
            <CONTAINER className="container">
                <CONTAINERHEADER className="header">
                    <LOGO>Logo</LOGO>
                    <NAVBAR className="header-navbar">
                        <NavLink to="/">
                            <LINKHOME href="">Home</LINKHOME>
                        </NavLink>
                        <NavLink to="/about">
                            <LINKHOME href="">About</LINKHOME>
                        </NavLink>
                        <NavLink to="contact">
                            <LINKHOME href="">Contact</LINKHOME>
                        </NavLink>
                    </NAVBAR>
                    <BTN>click</BTN>
                </CONTAINERHEADER>
            </CONTAINER>
        </HEADERID>
    );
};

export default Header;