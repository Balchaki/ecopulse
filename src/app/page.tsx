"use client"
import styles from "./page.module.css"
import styled from "styled-components";

const HomeContainer = styled.div`
    display:flex;
    flex-direction: row;
`
const TextContainer = styled.div`
    flex-direction: column;
    width: 540px;
    margin-left: 52px;
`
const Title = styled.h1`
    margin-top: 79px;
    color: #1A1A1A;
    font-family: inherit;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;

    width: 512px;
`
const Subtitle = styled.h4`
    color: #666;
    font-family: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
`
const StartButton = styled.button`
    width: 186px;
    height: 48px;
    flex-shrink: 0;
    border-color: transparent;
    border-radius: 8px;
    background: #2E7D32;
    margin-top: 31px;
    color: white;
    
    &:hover{
        background: #205823;
        border-color: transparent;
    }
`

const LogoContainer = styled.div`
    display:flex;
    margin-left:auto;
    margin-right: 5%
`
const HomeLogo = styled.img`
    width: 552px;
    height: 368px;
    flex-shrink: 0;
    
    margin-top: 79px;
    
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`


export default function Home() {
    return (
        <div className={styles.page}>
            <main>
                <HomeContainer>
                    <TextContainer>
                        <Title>
                            Economia de energia inteligente para um futuro sustentável
                        </Title>
                        <Subtitle>Monitore e otimize seu consumo de energia com tecnologia IoT e Inteligência Artificial</Subtitle>
                        <StartButton>Comece Agora</StartButton>
                    </TextContainer>
                    <LogoContainer>
                        <HomeLogo src={"/logo-home.png"}></HomeLogo>
                    </LogoContainer>
                </HomeContainer>

            </main>
        </div>
    )
}
