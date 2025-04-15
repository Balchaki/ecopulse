'use client'
import styled from "styled-components"
import CardComponent from "@/components/ui/card"

const Title = styled.h1`
    font-family: inherit;
    color: #1A1A1A;
    text-align: center;
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
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 1200px) {
        gap: 20px;
    }

    @media (max-width: 1024px) {
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        margin-top: 30px;
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

export default function Home() {
    return (
        <PageWrapper>
            <MainContent>
                <Title>Sobre a EcoPulse</Title>
                <CardContainer>
                    <CardComponent
                        title="Nossa Missão"
                        text="Capacitar residências e empresas a reduzirem seu impacto ambiental através do uso inteligente de energia."
                    />
                    <CardComponent
                        title="Nossa Visão"
                        text="Ser referência em soluções sustentáveis de gestão energética, contribuindo para um futuro mais verde."
                    />
                </CardContainer>
            </MainContent>
        </PageWrapper>
    )
}
