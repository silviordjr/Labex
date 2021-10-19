import React, {useState, useEffect} from 'react';
import { useGetTripDetail } from '../hooks/useGetTripDetail';
import styled from 'styled-components';
import calendario from '../img/icone_calendario.png'
import relogio from '../img/icone_relogio.png'
import planeta from '../img/icone_planeta.png'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { Loading } from '../components/Loading';

const MainContainerDetail = styled.div`
    min-height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    
    h1{ 
        color: orange;
        @media(max-width:800px){
            align-self: center;
            text-align: center;
        }
    }
`

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 75vh;
    width: 35vw;
    margin-right: 5vw;
    color: orange;

    h2{
        color: orange;
    }

    @media(max-width:800px){
        width: 80vw;
        height: 50vh;
        align-self: center;
    }
`

const ContainerCandidatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75vh;
    min-width: 35vw;
    margin-left: 5vw;
    color: orange;
    

    p{
        font-size: 12px;
        margin-top: 0;
        padding-top: 0;
    }


    h2{
        color: orange;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`

const ContainerSecundario = styled.div`
    display: flex;
    @media(max-width:800px){
        flex-direction: column;
    }
`

const ContainerPlaneta = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;
    margin-bottom: 2vh;

    img{
        padding-right: 2vw;
    }

`

const ContainerCalendario = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;
    margin-bottom: 2vh;

    img{
        padding-right: 2vw;
    }

`
const ContainerRelogio = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-left: 3vw;

    img{
        padding-right: 2vw;
    }   

`

const Planeta = styled.img`
    height: 30px;
    width: auto;
`

const Relogio = styled.img`
    height: 30px;
    width: auto;
`

const Calendario = styled.img`
    height: 30px;
    width: auto;
`
const ContainerDescricao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 19vw;
    @media(max-width:800px){
        width: 70vw;
    }
`

const ContainerCandidato = styled.div`
    background-color: black;
    width: 25vw;
    min-height: 25vh;
    margin-bottom: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    :hover{
        box-shadow: 2px 2px 25px lightgray;
        cursor: pointer;
    }

    @media(max-width:800px){
        width: 80vw;
    }
`

const ContainerNome = styled.div`
    padding-bottom: 2vh;
    padding-top: 1vh;
`

const ContainerProfisao = styled.div`
    padding-bottom: 2vh;
`

const ContainerPais = styled.div`
    padding-bottom: 2vh;
`

const ContainerTexto = styled.div`
    padding-bottom: 2vh;
    text-align: center;
`


function TripDetailsPage () {
    useProtectedPage()
    const pathParams = useParams()
    const [trip, setTrip] = useState([])
    const [atualizarAprovado, setAtualizarAprovado] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        console.log('entrei!')
        const headers = {
            headers:{
                auth: window.localStorage.getItem('token')
            }
        }

        setLoading(true)

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trip/${pathParams.trip_id}`, headers)
        .then((res) => {
            setTrip(res.data.trip)
            setLoading(false)
        })
        .catch((err) => {
            alert(err.response)
            setLoading(false)
        })
    }, [atualizarAprovado])


    let candidatosEmEspera = trip.candidates
    let candidatosAprovados = trip.approved

    let aprovarCandidato = (id) => {
        const headers = {
            headers:{
                'Content-Type': 'application/json',
                auth: window.localStorage.getItem('token')
            }
        }

        const body = {
            "approve": true
        }

        if (window.confirm("Deseja aprovar o candidato?")){

            setLoading(true)
            axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips/${pathParams.trip_id}/candidates/${id}/decide`, body, headers)
            .then((res) => {
                alert('Candidato Aprovado!')
                setAtualizarAprovado(!atualizarAprovado)
                setLoading(false)
            })
            .catch(err =>{
                alert(err.response.data)
                setLoading(false)
            })
        }

    }

    console.log(candidatosAprovados)
    
    return(
        <MainContainerDetail>
            {(loading === true) ?
                (<Loading/>)
                :
                (
            <div>
                        <h1>{trip.name}</h1>
                        <ContainerSecundario>
                            <ContainerDetalhes>
                                <h2>Detalhes</h2>
                                <ContainerDescricao>
                                    <b>{trip.description}</b>
                                </ContainerDescricao>
                                <ContainerPlaneta>
                                    <Planeta src={planeta} alt="Logo Planeta" />
                                    {trip.planet}
                                </ContainerPlaneta>
                                <ContainerCalendario>
                                    <Calendario src={calendario} alt="logo calendário" />
                                    {trip.date} 
                                </ContainerCalendario>
                                <ContainerRelogio>
                                    <Relogio src={relogio} alt="logo relógio" />
                                    {trip.durationInDays} dias
                                </ContainerRelogio>
                            </ContainerDetalhes>
                    
                            <ContainerCandidatos>
                                <h2>Candidatos</h2>
                                <h4>Em Espera</h4>
                                {(candidatosEmEspera && candidatosEmEspera.length > 0) ?
                                (<p><b>Clique no candidato para aprova-lo.</b></p>)
                                :
                                (<p><b>Ainda não temos candidaturas para essa viagem.</b></p>)}
                                {candidatosEmEspera && (candidatosEmEspera.map((candidato) => (
                                <ContainerCandidato onClick={() => aprovarCandidato(candidato.id)}>
                                    <ContainerNome>
                                        {candidato.name}, {candidato.age}
                                        </ContainerNome>
                                    <ContainerProfisao>
                                        Profissão: {candidato.profession}
                                    </ContainerProfisao>
                                    <ContainerPais>
                                        País: {candidato.country}
                                    </ContainerPais>
                                    <ContainerTexto>
                                        {candidato.applicationText}
                                    </ContainerTexto>
                                </ContainerCandidato>
                                )))}
                                <h4>Aprovados</h4>
                                {(candidatosAprovados && candidatosAprovados.length > 0) ?
                                (candidatosAprovados.map((candidato) => (
                                <ContainerCandidato>
                                    <ContainerNome>
                                        {candidato.name}, {candidato.age}
                                        </ContainerNome>
                                    <ContainerProfisao>
                                        Profissão: {candidato.profession}
                                    </ContainerProfisao>
                                    <ContainerPais>
                                        País: {candidato.country}
                                    </ContainerPais>
                                    <ContainerTexto>
                                        {candidato.applicationText}
                                    </ContainerTexto>
                                </ContainerCandidato>
                                )))
                                :
                                (<p><b>Nenhum candidato foi aprovado!</b></p>)}
                            </ContainerCandidatos>
                    
                        </ContainerSecundario>
            </div>
            )}
        </MainContainerDetail>
    )
}

export default TripDetailsPage 