"use client"

import styled from "styled-components";
import LogoMin from "@/components/icons/logo-min";
import NavbarLink from "@/components/ui/navbar-link";

const NavGroup = styled.nav`
    height: var(--nav-height);
    background: var(--nav-background);
    padding-left: 52px;
    padding-top: 0.5%;
    display: flex;
    align-items: center;
`
const NavLogo = styled.a`
    color: var(--text-logo);
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;

    display: flex;
    align-items: center;
    text-decoration: none;
`

const LinkContainer = styled.div`
    position: absolute;
    right: 66px;
`


export default function NavComponent() {
    return(
        <NavGroup>
            <NavLogo href={"/"}><LogoMin></LogoMin>EcoPulse</NavLogo>
            <LinkContainer>
                <NavbarLink text={"Contato"} path={"/contact"}></NavbarLink>
                <NavbarLink text={"Contato"} path={"/contact"}></NavbarLink>
            </LinkContainer>
        </NavGroup>
    );
}

