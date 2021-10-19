import React, {useState} from 'react';
import axios from 'axios';
import { useGetTrips } from '../hooks/useGetTrips';
import styled from 'styled-components';
import calendario from '../img/icone_calendario.png'
import relogio from '../img/icone_relogio.png'
import planeta from '../img/icone_planeta.png'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { Loading } from '../components/Loading';



const MainContainerTrips = styled.div`
    min-height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    flex-wrap: wrap;
    padding-left: 6vw;
    padding-bottom: 4vh;
    padding-top: 4vh;
    margin-top: 0;
    padding-top: 0;
`

const CardTrip = styled.div`
    background-color: black;
    display: flex;
    height: 54vh;
    width: 25vw;
    flex-direction: column;
    align-items: center;
    color: orange;
    margin: 2vh 2vw;

    :hover{
        box-shadow: 2px 2px 25px lightgray;
        cursor: pointer;
    }

    @media(max-width:800px){
        width: 80vw;
        margin-left: 4vw;
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

const ContainerNome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 12vh;

    h2{
        text-align: center;
        padding-top: 2vh;
    }
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

const ContainerSecundario = styled.div`
    display: flex;
`

const ContainerCandidato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;

    h3{
        color: orange;
        @media(max-width:800px){
            font-size: 18px;
        }
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 4vh;
        width: 18vw;
        border-radius: 12px;

        @media(max-width:800px){
            width: 40vw;
            margin-left: 4vw;
        }


        :hover {
            cursor: pointer;
            background-color: darkorange;
            border-color: darkorange;
        }

        :active {
            cursor: pointer;
            background-color: gold;
            border-color: gold;
        }
    }
`

const CardButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button{
        background-color: orange;
        border-color: orange;
        height: 4vh;
        width: 18vw;
        margin-bottom: -4vh;
        border-radius: 12px;
        margin-top: 4vh;
        z-index: 0;
        @media(max-width:800px){
            width: 40vw;
        }


        :hover {
            cursor: pointer;
            background-color: darkorange;
            border-color: darkorange;
        }

        :active {
            cursor: pointer;
            background-color: gold;
            border-color: gold;
        }
    }
`

function ListTripAdminPage () {
    useProtectedPage()
    const [flagDelete, setFlagDelete] = useState(false)
    const [loading, setLoading] = useState(false)
    let [trips,loadingTrips] = useGetTrips(flagDelete)


    let history = useHistory()


    let goToCreateTrip = () => {
        history.push('/create_trip')
    }    

    let goToTripDetails = (id) => {
        history.push(`/trip_details/${id}`)
    }

   

    let deleteTrip = (id) => {
        if (window.confirm('Você deseja deletar a viagem?')){
            const headers = {
                headers:{
                    'Content-Type': 'application/json',
                    auth: window.localStorage.getItem('token')
                }
            }
            setLoading(true)

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips/${id}`, headers)
            .then((res) => {
                alert('Viagem deletada com sucesso!')
                setFlagDelete(!flagDelete)
                setLoading(false)
            })
            .catch((err) => {
                alert(`Algo deu errado... ${err.response.data}`)
                setLoading(false)
            })
        }
    }

    const renderizaTrip = trips.map((trip) => {
        return (
            <CardButton>
                <button onClick={() => deleteTrip(trip.id)}>Deletar Viagem</button>
                <CardTrip onClick={() => goToTripDetails(trip.id)}>
                    <ContainerNome>
                        <h2>{trip.name}</h2>
                    </ContainerNome>
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
                </CardTrip>
            </CardButton>
        )
    })
    return(
        <MainContainerTrips>
            <ContainerSecundario>
                <ContainerCandidato>
                    <h3>Tem uma nova viagem? Clique no botão abaixo para cria-la!</h3>
                    <button onClick={goToCreateTrip}>Criar Viagem</button>
                </ContainerCandidato>
            </ContainerSecundario>
            {((loading === true) || (loadingTrips === true)) ? 
            (<Loading/>)
            :
            (renderizaTrip)}
        </MainContainerTrips>
    )
}

export default ListTripAdminPage