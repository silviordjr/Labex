import React,{useState} from 'react';
import styled from 'styled-components'
import Icone from '../img/icone.png'
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { Loading } from '../components/Loading';


const MainContainerForm = styled.div`
    height: 100vh;
    background-image: radial-gradient(#000000,#111111);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0;
    padding-top: 0;
    @media(max-width:800px){
            height: 150vh;
    }
`

const CardForm = styled.div`
    background-color: black;
    height: 78vh;
    width: 60vw;
    padding-top: 0;
    @media(max-width:800px){
        width: 80vw;
        height: 120vh;
    }

`

const Form = styled.form`
    display: flex;
    @media(max-width:800px){
        flex-direction: column;
    }

`

const ContainerEsquerdo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 8vh;

    input {
        background-color: #111111;
        border: none;
        height: 6vh;
        width: 18vw;
        margin-bottom: 3vh;
        border-radius: 12px;
        color: lightgray;
        @media(max-width:800px){
            width: 40vw;
        }

    }

    button{
        background-color: orange;
        border-color: orange;
        height: 6vh;
        width: 18vw;
        margin-bottom: 4vh;
        border-radius: 12px;

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

const ContainerDireito = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    margin-left: 4vw;
    margin-top: 10vh;
    @media(max-width:800px){
        margin-left: 18vw;
    }
    
    input {
        background-color: #111111;
        border: none;
        height: 26vh;
        width: 24vw;
        margin-bottom: 6vh;
        border-radius: 12px;
        color: lightgray;
        @media(max-width:800px){
            width: 40vw;
        }
    }

    button{
        background-color: orange;
        border-color: orange;
        height: 6vh;
        width: 18vw;
        margin-bottom: 4vh;
        border-radius: 12px;

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

const ContainerMarca = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    margin-top: 4vh;

    h1{
        color: orange;
        font-size: 50px;
    }
`

const IconeLabex = styled.img`
    height: 70px;
    width: auto;
`

const Mensagem = styled.div`
    color: orange;
    justify-content: center;
    text-align: center;
`

function CreateTripPage () {
    useProtectedPage()
    const [form, onChange] = useForm({name:'', planet:'', date:'', description:'', durationInDays:''})
    const[mensagem, setMensagem] = useState('')
    const[loading, setLoading] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()

        const headers = {
            headers:{
                'Content-Type': 'application/json',
                auth: window.localStorage.getItem('token')
            }
        }

        setLoading(true
            )
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips`, form, headers)
        .then((res) => {
            setMensagem('Viagem criada com sucesso!')
            setLoading(false)
        })
        .catch((err) => {
            setMensagem(`Algo deu errado... \n${err.response.data}`)
            setLoading(false)
        })
    }
    return(
        < MainContainerForm>
            <CardForm>
                <ContainerMarca>
                    <IconeLabex src={Icone} alt="Icone LabeX" />
                    <h1>LabeX</h1>
                </ContainerMarca>
                {(loading === true) ?
                (<Loading/>)
                :
                (
                    <div>
                        < Mensagem >
                            {(mensagem !== '') ?
                            (<p><b>{mensagem}</b></p>)
                            :
                            (<p><b>Crie uma nova viagem:</b></p>)}
                        </ Mensagem >
                        <Form onSubmit={handleClick}>
                            <ContainerEsquerdo>
                                <input onChange={onChange} value={form.name} name='name' placeholder='Nome' required />
                                <input onChange={onChange} value={form.planet} name='planet' placeholder='Planeta' required />
                                <input onChange={onChange} value={form.date} name='date' type='date' placeholder='Data' required />
                                <input onChange={onChange} value={form.durationInDays} name='durationInDays' type='number' placeholder='Duração em Dias' required/>
                            </ContainerEsquerdo>
                            <ContainerDireito>
                                <input onChange={onChange} value={form.description} name='description' placeholder='Descrição' required />
                                <button>Criar Viagem</button>
                            </ContainerDireito>
                        </Form>
                    </div>
                )}
                
            </CardForm>
        </ MainContainerForm>
    )
}

export default CreateTripPage