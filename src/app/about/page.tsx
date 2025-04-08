'use client'
import styled from "styled-components"
import styles from "./page.module.css"
import CardComponent from "@/components/ui/card"

const Title = styled.h1`
font-family: inherit;
color: #1A1A1A;

text-align: center;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 54px;
margin-top: 41px;
`
const CardContainer = styled.div`
display:flex;
flex-direction: row-reverse;
margin-left: 33px;
`


export default function Home() {
    return (
        <div className={styles.page}>
            <main>      
                <Title>Sobre a EcoPulse</Title>
<CardContainer>
                <CardComponent title="Nossa Missão" text="Capacitar residências e empresas a reduzirem seu impacto ambiental através do uso inteligente de energia."></CardComponent>
                <CardComponent title="Nossa Visão" text= "Ser referência em soluções sustentáveis de gestão energética, contribuindo para um futuro mais verde."></CardComponent>
                </CardContainer> </main>
        </div>
    )

}
