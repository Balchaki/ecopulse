"use client"

import styled from "styled-components";
import LogoMin from "@/components/icons/logo-min";
import NavbarLink from "@/components/ui/navbar-link";
import { usePathname } from "next/navigation";

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
    margin-left: auto;
    margin-right: 66px;
`
const navLinks = [
    { text: "Home", path: "/" },
    { text: "Sobre", path: "/about" },
    { text: "Serviços", path: "/services" },
    { text: "Contato", path: "/contact" },
]

export default function NavComponent() {
    const pathname = usePathname();
    return(
        <NavGroup>
            <NavLogo href={"/"}><LogoMin></LogoMin>EcoPulse</NavLogo>
            <LinkContainer>
                {navLinks.map((link, index) => (
                    <NavbarLink key={index} text={link.text} path={link.path} active={pathname === link.path} />
                ))}
            </LinkContainer>
        </NavGroup>
    );
}

