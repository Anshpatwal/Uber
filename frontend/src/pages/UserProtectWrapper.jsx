
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const UserProtectWrapper = ({ children }) => {

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const { loading, setLoading } = useState(true)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }

    }, [token])


    // axios.get(`${import.meta.env.VITE_BACKEND_URL}/captain/profile`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // }).then((response) => {
    //     if (response.status == 200) {
    //         setCaptain(response.data.captain)
    //         setLoading(false)
    //     }
    // }).catch((err) => {
    //     console.log(err)
    //     localStorage.removeItem(token)
    //     navigate('/captain-login')
    // })


    if (loading) {
        return <div>
            Loading .....
        </div>
    }
    return (
        <>
            {children}
        </>
    )
}

export default UserProtectWrapper
