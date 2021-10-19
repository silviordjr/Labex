import React  from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Icone from '../img/icone.png'


const MainContainerHeader = styled.div`
    height: 10vh;
    background-color: #000000;
    display: grid;
    grid-template-columns: 20vw 1fr;
`

const ContainerMarca = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: orange;

        @media (max-width: 800px){
            display: none;
        }
    }
`

const ContainerNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 30vw;

`

const Button = styled.button`
    margin-top: 2vh;
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
`

const IconeLabex = styled.img`
    height: 40px;
    width: auto;

    @media(max-width:800px){
        margin-top: 2vh;
    }
`

function Header () {
    let history = useHistory()

    const goToAdmin = () => {
        history.push('/admin')
    }
    const goToHome = () => {
        history.push('/')
    }
    
    const goToListTrip = () => {
        history.push('/trips')
    }
    
    return(
        <MainContainerHeader>
            <ContainerMarca>
                <IconeLabex src={Icone} alt="Icone LabeX" />
                <h1>LabeX</h1>
            </ContainerMarca>
            <ContainerNav>
                <Button onClick={goToHome}>Home</Button>
                <Button onClick={goToListTrip}>Trips</Button>
                <Button onClick={goToAdmin}> Admin</Button>
            </ContainerNav>
        </MainContainerHeader>
    )
}

export default Header