"use client"

import styled from "styled-components";
import Link from "next/link";

interface NavbarLinkProps{
    text: string,
    path: string,
    active: boolean
}

interface StyledLinkProps {
    $active: boolean;
}

const NavLink = styled(Link)<StyledLinkProps>`
    color: ${props => props.$active ? "var(--nav-link-active)" : "var(--nav-link-background)"};
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: ${props => props.$active ? '700' : '400'};
    line-height: 24px;
    margin-left: 32px;
    text-decoration: none;

    @media (max-width: 768px) {
        margin-left: 20px;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin-left: 0;
        margin-bottom: 10px;
    }
`

export default function NavbarLink(props: NavbarLinkProps){
    return(
        <NavLink href={props.path} $active={props.active}>
            {props.text}
        </NavLink>
    )
}
