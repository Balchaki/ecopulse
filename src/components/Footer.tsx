"use client"

import styled from "styled-components";
import LogoMin from "@/components/icons/logo-min";

const FooterGroup = styled.footer`
    background: var(--footer-background);
    min-height: var(--footer-height);
    padding: 20px 60px;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        padding: 20px 30px;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 480px) {
        padding: 15px;
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
`

const FooterLogo = styled.a`
    color: white;
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
        margin-bottom: 5px;
    }
`

const CopyrightText = styled.div`
    color: #999;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-left: auto;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 21px;
    }

    @media (max-width: 480px) {
        margin-left: 0;
        font-size: 12px;
        line-height: 18px;
    }
`

export default function FooterComponent(){
    return(
        <FooterGroup>
            <FooterLogo><LogoMin/> EcoPulse</FooterLogo>
            <CopyrightText>© 2025 EcoPulse. Todos os direitos reservados.</CopyrightText>
        </FooterGroup>
    );
}
