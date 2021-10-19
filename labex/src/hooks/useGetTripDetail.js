import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useGetTripDetail = (id) => {
    const [trip, setTrip] = useState([])
    
    const headers = {
        headers:{
            auth: window.localStorage.getItem('token')
        }
    }

    useEffect (() => {
        console.log("oi")

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trip/${id}`,headers)
        .then((res) => {
            console.log(res.data)
            setTrip(res.data.trip)
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data)
        })
    }, [])

    return trip
}