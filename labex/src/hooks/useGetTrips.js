import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const useGetTrips = (flagDelete) => {
    const [trips, setTrips] = useState([])
    const [loadingTrips, setLoadingTrips] = useState(false)

    useEffect (() => {
        setLoadingTrips(true)
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/silvio_dias/trips')
        .then((res) => {
            setTrips(res.data.trips)
            setLoadingTrips(false)
        })
        .catch((err) => {
            alert(err.response)
            setLoadingTrips(false)
        })
    }, [flagDelete])

    return [trips, loadingTrips]
}