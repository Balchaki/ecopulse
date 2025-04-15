"use client"

import styled from "styled-components";

interface CardSolutionProps {
    title: string,
    image: string,
    description: string
}

const CardBox = styled.div`
    border-radius: 12px;
    background: #F8FAF9;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
    width: 100%;
    max-width: 363px;
    min-height: 258px;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
        max-width: 340px;
    }

    @media (max-width: 768px) {
        max-width: 320px;
        min-height: auto;
        padding: 20px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 16px;
    }
`

const Image = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 6px;
    margin-top: 0;

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
    }
`

const Title = styled.h4`
    color: #1A1A1A;
    font-family: inherit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5;
    margin-top: 16px;
    margin-bottom: 0;

    @media (max-width: 768px) {
        font-size: 18px;
        margin-top: 12px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin-top: 10px;
    }
`

const Description = styled.div`
    color: #666;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 12px;

    @media (max-width: 480px) {
        font-size: 14px;
        margin-top: 8px;
    }
`

export default function CardSolutions(props: CardSolutionProps) {
    return (
        <CardBox>
            <Image src={props.image || "/placeholder.svg"} alt={props.title} />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
        </CardBox>
    );
}
