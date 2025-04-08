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

const CoprightText = styled.a`
    color: #999;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    position: absolute;
    right: 59px;
`

export default function FooterComponent(){
    return(
        <FooterGroup>
            <FooterLogo><LogoMin/> EcoPulse</FooterLogo>
            <CoprightText>© 2024 EcoPulse. Todos os direitos reservados.</CoprightText>
        </FooterGroup>
    );
}
