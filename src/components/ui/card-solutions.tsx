"use client"

import styled from "styled-components";

interface CardSolutionProps{
    title: string,
    image: string,
    description: string
}

const CardBox = styled.div`
    border-radius: 12px;
    background: #F8FAF9;
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);

    width: 363px;
    height: 258px;
    flex-shrink: 0;
    margin-left: 31px;
    padding-left: 24px;
    padding-right: 24px;
`
const Image = styled.img`
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    margin-top: 24px;
    border-radius: 6px;
`
const Title = styled.h4`
    color: #1A1A1A;
    font-family: inherit;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin-top: 16px;
`
const Description = styled.a`
    color: #666;
    font-family: inherit;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top: 12px;
`
export default function CardSolutions(props: CardSolutionProps){
    return (
      <CardBox>
        <Image src={props.image}/>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </CardBox>
    );
}
