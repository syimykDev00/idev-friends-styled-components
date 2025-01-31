import React from 'react';
import {NavLink} from "react-router-dom";
import styled from 'styled-components';
import {CONTAINER} from "../header/header";

const FOOTERID = styled.footer`
    background: blue;
    padding: 25px 0;
`;

const CONTAINERFOOTER = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;
    }
`;

const FOOTERLOGO = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: 600;
    @media (max-width: 400px) {
        padding: 0 0 15px 0;
    }
`;

const FOOTERLINK = styled.a`
    color: white;
    padding: 0 0 0 40px;
    font-size: 18px;
    font-weight: 500;
    @media (max-width: 400px) {
        padding: 0 15px;
    }
`

const Footer = () => {
    return (
        <FOOTERID id="footer">
            <CONTAINER className="container">
                <CONTAINERFOOTER className="footer">
                    <FOOTERLOGO>Logo</FOOTERLOGO>
                    <nav className="footer-navbar">
                        <NavLink to={'/'}> <FOOTERLINK>home</FOOTERLINK> </NavLink>
                        <NavLink to={'/about'}> <FOOTERLINK>about</FOOTERLINK> </NavLink>
                        <NavLink to={'/contact'}> <FOOTERLINK>contact</FOOTERLINK> </NavLink>
                    </nav>
                </CONTAINERFOOTER>
            </CONTAINER>
        </FOOTERID>
    );
};

export default Footer;