import React from 'react';
import GifHome from '../img/gifHome.gif'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


const MainContainerHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-left: 4vw;
    padding-right: 4vw;
    height: 100vh;
    background-color:  #8F85D8;
    background-image: url(${GifHome});
    background-repeat: no-repeat;
    background-size: 140vw;
    background-position-x: -40vw;
    background-position-y: -100vh;
    @media(max-width:800px){
        background-size: 140vh;
        background-position-x: -100vw;
        background-position-y: 0;
    }
`

const SobreNos = styled.div`
    height: 70vh;
    width: 32vw;
    background-image: radial-gradient(#000000,#111111);
    box-shadow: -8px -8px 20px orange;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4vh;

    h2{
        color: orange;
        @media(max-width:800px){
            font-size: 14px;
        }
    }

    p{
        color: orange;
        width: 20vw;
        text-align: center;
        @media(max-width:800px){
            font-size: 10px;
            width: 60vw;
        }
    }

    @media(max-width:800px){
        height: 45vh;
        width: 70vw;
        margin-top: -50vh;
        justify-content: center;
    }
`

const Button = styled.button`
    margin-top: 6vh;
    margin-left: 1vw;
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid orange;
    color: orange;

    :hover{
        background-color: orange;
        color: #000000;
        cursor: pointer
    }

    :active{
        background-color: darkorange;
        border-bottom: 1px solid darkorange ;
        color: black;
    }

    @media(max-width:800px){
            font-size: 8px;
            margin-top: 0;
        }
`



function HomePage () {
    let history = useHistory()

    const goToAdmin = () => {
        history.push('/admin')
    }
    
    const goToListTrip = () => {
        history.push('/trips')
    }

    return(
        <MainContainerHome>
            <SobreNos>
                <h2>LabeX</h2>
                <p>
                    <b>Somos uma empresa especializada em viagens espaciais!</b> <br/><br/> Possuímos vigens para todas as partes do universo. 
                    Você pode acessar nossa lista de viagens ao clicar no botão "Ver Viagens", e se candidatar para uma de nossas explorações poe meio de nosso formulário. 
                    Aqui você encontra as melhores vaigens espaciais.

                </p>
                <div>
                    <Button onClick={goToListTrip}>Ver Viagens</Button>
                    <Button onClick={goToAdmin}>Área do Admin</Button>
                </div>
            </SobreNos>
        </MainContainerHome>
    )
}

export default HomePage