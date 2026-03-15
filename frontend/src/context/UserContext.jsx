import React, { createContext } from 'react'

export const userDatacontext = createContext();
const UserContext = ({ children }) => {

    const serverUrl = "http://localhost:3000"

    const value = {serverUrl}

    return (
        <div>
            <userDatacontext.Provider  value={value}>
                {children}
            </userDatacontext.Provider>
        </div>
    )
}

export default UserContext