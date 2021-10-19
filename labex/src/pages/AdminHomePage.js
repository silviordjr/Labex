import React from 'react';
import { useProtectedPage } from '../hooks/useProtectedPage';
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
    margin-top: 2vh;
    padding-top: 4vh;

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

function AdminHomePage () {
    useProtectedPage()

    let history = useHistory()

    const goToCreateTrip = () => {
        history.push('/create_trip')
    }
    
    const goToListAdminTrip = () => {
        history.push('/trips_admin')
    }

    return(
        <MainContainerHome>
            <SobreNos>
                <p>
                    <b>Bem-vindo à página de administradores!</b> <br/><br/> Por aqui, você pode gerenciar viagens espaciais. Ao clicar em 'Lista de Viagens',
                    você terá acesso à uma lista de viagens, onde poderá excluir qualquer viagem ou observar os detalhes de uma viagem específica. Além
                    de observar a lista de candidatos (aprovados ou não) e aprovar candidatos para viagens espaciais. Ao clicar em 'Criar Viagem', você terá acesso 
                    à um formulário para criar novas viagens.
                </p>
                <div>
                    <Button onClick={goToListAdminTrip}>Lista de Viagens</Button>
                    <Button onClick={goToCreateTrip}>Criar Viagem</Button>
                </div>
            </SobreNos>
        </MainContainerHome>
    )
}

export default AdminHomePage