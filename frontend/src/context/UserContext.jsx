import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const userDatacontext = createContext();
const UserContext = ({ children }) => {

    const [userData, setUserData] = useState(null)

    const serverUrl = "http://localhost:3000"

    const value = {serverUrl, userData, setUserData}

    const handleUserData = async() => {
        try {
            const res = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true });
            setUserData(res.data);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {
        handleUserData()
    },[])

    return (
        <div>
            <userDatacontext.Provider  value={value}>
                {children}
            </userDatacontext.Provider>
        </div>
    )
}

export default UserContext