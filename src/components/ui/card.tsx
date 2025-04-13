'use client'

import styled from "styled-components"

interface CardProps{
    title: string, 
    text: string

}


const CardGroup= styled.div`
border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00);
width: 560px;
height: 164px;
flex-shrink: 0;
margin-left: 40px;
margin-right: 50px;
padding-left: 32px;
padding-top: 32px;
padding-right: 44px;

h3{
color: #1A1A1A;
font-family: inherit;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 36px;
padding-bottom: 16px;
}

a{
color: #666;
font-family: inherit;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;

`
export default function CardComponent (props:CardProps){
    return(
       <CardGroup>
            <h3>{props.title}</h3>

            <a>{props.text}</a>
        </CardGroup>
    )
}