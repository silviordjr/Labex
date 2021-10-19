import React  from "react";
import styled from "styled-components";
import Icone from '../img/icone.png'
import linkedin from '../img/logo_linkedin.png'
import github from '../img/logo_github.png'

const MainContainerFooter = styled.div`
    background-color: black;
    height: 20vh;
    display: flex;

    @media(max-width: 800px){
        height: 35vh;
        flex-direction: column;
    }
`
const ContainerMarca = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    color: orange;
    margin-bottom: 0;
    padding-bottom: 0;
    margin-top: 0;
    height: 5vh;

    h1{
        color: orange;
        
        @media(max-width: 800px){
            font-size: 18px;
        }
        
    }

    
`

const ContainerEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4vw;
    margin-right: 6vw;
    color: orange;
    width: 40vw;

    p{
        margin-top: 0;
        padding-top: 0;
        
        @media(max-width: 800px){
            font-size: 12px;
        }
    }

    
    @media(max-width: 800px){
        width: 80vw;
    }
`

const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-left: 6vw;
    margin-left: 4vw;
    color: orange;
    width: 40vw; 
    height: 15vh;
    margin-top: 2vh;
    h3{
        margin-bottom: 0;
        padding-bottom: 0;
        @media(max-width: 800px){
            font-size: 14px;
        }
    }
    p{
        margin-top: 0;
        padding-top: 0;
        @media(max-width: 800px){
            font-size: 12px;
        }
    }

    img{
        margin-left: 2vw;
    }
    @media(max-width: 800px){
        width: 80vw;
        align-items: flex-start;
    }
`

const IconeLabex = styled.img`
    height: 40px;
    width: auto;

    
    @media(max-width: 800px){
        height: 28px;
        width: auto;
    }
`

const ImgRedes = styled.img`
    height: 30px;
    width: auto;
`

function Footer () {
    return(
        <MainContainerFooter>
            <ContainerEsquerdo>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                <p>Empresa fictícia de exploração espacial</p>
            </ContainerEsquerdo>
            <ContainerDireito>
                <h3>Feito por Silvio Ribeiro Dias Junior</h3>
                <p>Acompanhe minhas redes sociais</p>
                <div>
                <a href="https://www.linkedin.com/in/silvio-dias-junior/" target="_blank"><ImgRedes src={linkedin} alt="logo linkedin" /></a>
                <a href="https://github.com/silviordjr" target="_blank"><ImgRedes src={github} alt="logo github" /></a>
                </div>
            </ContainerDireito>
        </MainContainerFooter>
    )
}

export default Footer