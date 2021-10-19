import React from 'react'
import styled from 'styled-components'
import Logo from '../img/icone.png'
import GifLoading from '../img/gifLoading.gif'

const MainContainerLoading = styled.div`
    height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    align-self: center;
`

const CardLoad = styled.div`
    /* height: 75vh;
    width: 30vw;
    margin-bottom: 10vh;
    background-color: black; */
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: center;

    @media(max-width:800px){
        width: 80vw;
    }
`

const LogoLabex = styled.img`
    height: 30vh;
    justify-self: center;
    margin-top: 10vh;
    width: auto;
    @media(max-width:800px){
        height: 20vh;
        width: auto;
    }
`

const Gif = styled.img`
    margin-top: -45vh;
    justify-self: center;
    height:60vh;
    width: auto;
    @media(max-width:800px){
        height: 40vh;
        width: auto;
    }
`


export function Loading () {
    return (
        // <MainContainerLoading>
        //     <CardLoad>
        //         <LogoLabex  src={Logo} alt='Logo Labex' />
        //         <Gif src={GifLoading} alt='Loading...' />
        //     </CardLoad>
        // </MainContainerLoading>
        <CardLoad>
                <LogoLabex  src={Logo} alt='Logo Labex' />
                <Gif src={GifLoading} alt='Loading...' />
        </CardLoad>
    )
}