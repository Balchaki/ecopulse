'use client'
import styled from "styled-components"
import styles from "./page.module.css"
import CardSolutions from "@/components/ui/card-solutions";

const Title = styled.h1`
    color: #1A1A1A;
    text-align: center;
    font-family: inherit;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 54px;
    margin-top: 41px;
`

const CardContainer = styled.div`
    margin-top: 48px;
    align-content: center;
    align-items: center;
    justify-content: center;
    
    display:flex;
    flex-direction: row;

`

const solutions = [
    { image: "/iot.png" , title: "Monitoramento IoT", description: "Dispositivos inteligentes que monitoram seu consumo em tempo real"},
    { image: "/ia.png" , title: "Análise Inteligente", description: "IA que identifica padrões e sugere otimizações personalizadas"},
    { image: "/report.png" , title: "Relatórios Detalhados", description: "Acompanhe sua economia e impacto ambiental com relatórios claros"},
]

export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <Title>Nossas Soluções</Title>
                <CardContainer>
                    {solutions.map((solution, index) => (
                        <CardSolutions key={index}
                                   image={solution.image}
                                    title={solution.title}
                                    description={solution.description}/>
                    ))}
                </CardContainer>
            </main>
        </div>

    )

}
