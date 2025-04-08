"use client"

import styled from "styled-components";
import LogoMin from "@/components/icons/logo-min";

const FooterGroup = styled.footer`
    background: var(--footer-background);
    height: var(--footer-height);
    padding-left: 60px;
    padding-top: 0.5%;
    display: flex;
    align-items: center;
`

const FooterLogo = styled.a`
    color:white;
    font-family: inherit;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    display: flex;
    align-items: center;
`

export default function FooterComponent(){
    return(
        <FooterGroup>
            <FooterLogo><LogoMin/>      EcoPulse</FooterLogo>
        </FooterGroup>
    );
}
