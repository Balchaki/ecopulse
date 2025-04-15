'use client'

import styled from "styled-components"

interface CardProps {
    title: string,
    text: string
}

const CardGroup = styled.div`
    border-radius: 12px;
    background: #FFF;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    width: 100%;
    max-width: 560px;
    min-height: 164px;
    margin: 0 auto 20px;
    padding: 32px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 24px;
        min-height: auto;
    }

    @media (max-width: 480px) {
        padding: 20px;
        margin-bottom: 15px;
    }

    h3 {
        color: #1A1A1A;
        font-family: inherit;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.5;
        margin-top: 0;
        margin-bottom: 16px;

        @media (max-width: 768px) {
            font-size: 20px;
            margin-bottom: 12px;
        }

        @media (max-width: 480px) {
            font-size: 18px;
            margin-bottom: 10px;
        }
    }

    a {
        color: #666;
        font-family: inherit;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        display: block;

        @media (max-width: 480px) {
            font-size: 14px;
        }
    }
`

export default function CardComponent(props: CardProps) {
    return (
        <CardGroup>
            <h3>{props.title}</h3>
            <a>{props.text}</a>
        </CardGroup>
    )
}
