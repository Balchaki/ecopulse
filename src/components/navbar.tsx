"use client"

import { useState } from "react";
import styled from "styled-components";
import LogoMin from "@/components/icons/logo-min";
import NavbarLink from "@/components/ui/navbar-link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
    $isOpen: boolean;
}

const NavGroup = styled.nav`
    height: var(--nav-height);
    background: var(--nav-background);
    padding-left: 52px;
    padding-right: 52px;
    padding-top: 0.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 768px) {
        padding-left: 20px;
        padding-right: 20px;
    }
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

    @media (max-width: 480px) {
        font-size: 20px;
        line-height: 30px;
    }
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
        display: none;
    }
`

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: var(--text-logo);
    cursor: pointer;
    padding: 8px;
    
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const MobileMenu = styled.div<MobileMenuProps>`
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--nav-background);
    flex-direction: column;
    padding: 16px;
    z-index: 100;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    a {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }
`

const navLinks = [
    { text: "Home", path: "/" },
    { text: "Sobre", path: "/about" },
    { text: "Soluções", path: "/solutions" },
    { text: "Contato", path: "/contact" },
]

export default function NavComponent() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return(
        <NavGroup>
            <NavLogo href={"/"}><LogoMin></LogoMin>EcoPulse</NavLogo>

            <LinkContainer>
                {navLinks.map((link, index) => (
                    <NavbarLink key={index} text={link.text} path={link.path} active={pathname === link.path} />
                ))}
            </LinkContainer>

            <MobileMenuButton onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </MobileMenuButton>

            <MobileMenu $isOpen={mobileMenuOpen}>
                {navLinks.map((link, index) => (
                    <NavbarLink key={index} text={link.text} path={link.path} active={pathname === link.path} />
                ))}
            </MobileMenu>
        </NavGroup>
    );
}
