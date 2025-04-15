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
    line-height: 1.5;
    margin-top: 41px;
    padding: 0 20px;

    @media (max-width: 768px) {
        font-size: 30px;
        margin-top: 30px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-top: 20px;
    }
`

const CardContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        margin-top: 30px;
        gap: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: 20px;
    }
`

const PageWrapper = styled.div`
    width: 100%;
    min-height: calc(100vh - var(--nav-height, 0px) - var(--footer-height, 0px));
    display: flex;
    justify-content: center;
    padding: 20px 0 40px;
    box-sizing: border-box;
    
    @media (max-width: 480px) {
        padding: 10px 0 30px;
    }
`

const MainContent = styled.main`
    width: 100%;
    max-width: 1200px;
`

const solutions = [
    { image: "/iot.png" , title: "Monitoramento IoT", description: "Dispositivos inteligentes que monitoram seu consumo em tempo real"},
    { image: "/ia.png" , title: "Análise Inteligente", description: "IA que identifica padrões e sugere otimizações personalizadas"},
    { image: "/report.png" , title: "Relatórios Detalhados", description: "Acompanhe sua economia e impacto ambiental com relatórios claros"},
]

export default function Home() {
    return (
        <PageWrapper>
            <MainContent>
                <Title>Nossas Soluções</Title>
                <CardContainer>
                    {solutions.map((solution, index) => (
                        <CardSolutions
                            key={index}
                            image={solution.image}
                            title={solution.title}
                            description={solution.description}
                        />
                    ))}
                </CardContainer>
            </MainContent>
        </PageWrapper>
    )
}
