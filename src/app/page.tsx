"use client"
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    width: 100%;

    @media (max-width: 1024px) {
        max-width: 100%;
        margin-left: 0;
        align-items: center;
    }

    @media (max-width: 480px) {
        padding: 0 10px;
    }
`

const Title = styled.h1`
    margin-top: 79px;
    color: #1A1A1A;
    font-family: inherit;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25;
    max-width: 512px;

    @media (max-width: 1024px) {
        margin-top: 40px;
        font-size: 36px;
        max-width: 100%;
    }

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-top: 30px;
    }
`

const Subtitle = styled.h4`
    color: #666;
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 16px;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`

const StartButton = styled.button`
    width: 186px;
    height: 48px;
    border-color: transparent;
    border-radius: 8px;
    background: #2E7D32;
    margin-top: 31px;
    color: white;
    cursor: pointer;

    &:hover {
        background: #205823;
        border-color: transparent;
    }

    @media (max-width: 768px) {
        margin-top: 25px;
    }

    @media (max-width: 480px) {
        width: 160px;
        height: 40px;
        font-size: 14px;
        margin-top: 20px;
    }
`

const LogoContainer = styled.div`
    display: flex;
    margin-left: auto;

    @media (max-width: 1024px) {
        margin-left: 0;
        margin-top: 40px;
        width: 100%;
    }
`

const HomeLogo = styled.img`
    width: 552px;
    height: 368px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-top: 79px;

    @media (max-width: 1024px) {
        margin-top: 0;
    }

    @media (max-width: 768px) {
        max-width: 450px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
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
`

export default function Home() {
    return (
        <PageWrapper>
            <MainContent>
                <HomeContainer>
                    <TextContainer>
                        <Title>
                            Economia de energia inteligente para um futuro sustentável
                        </Title>
                        <Subtitle>Monitore e otimize seu consumo de energia com tecnologia IoT e Inteligência Artificial</Subtitle>
                        <StartButton>Comece Agora</StartButton>
                    </TextContainer>
                    <LogoContainer>
                        <HomeLogo src={"/logo-home.png"} alt="EcoPulse - Economia de energia inteligente" />
                    </LogoContainer>
                </HomeContainer>
            </MainContent>
        </PageWrapper>
    )
}
