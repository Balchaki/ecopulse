"use client"

import styled from "styled-components";

interface NavbarLinkProps{
    text: string,
    path: string,
    active: boolean
}

const NavLink = styled.a`
    font-family: inherit;
    color: var(--nav-link-background);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration:none;
    padding-right: 31px;
    
    &:hover{
        color: var(--nav-link-hover);
    }
    
    &:active{
        color: var(--nav-link-active);
    }
`

export default function NavbarLink(props: NavbarLinkProps){
    return(
        <NavLink href={props.path} >{props.text}</NavLink>
    )
}
