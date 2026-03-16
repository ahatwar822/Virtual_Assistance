import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import { Toaster } from 'react-hot-toast'
import Customize from './pages/Customize.jsx'
import { userDatacontext } from './context/userContext.jsx'
import Home from './pages/Home.jsx'

const App = () => {

  const { userData, setUserData} = useContext(userDatacontext);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} toastOptions={{
        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid cyan"
        }
      }} />
      <Routes>
        <Route path='/' element={(userData?.assistantImage && userData?.assistantName)? <Home />:<Navigate to={"/customize"}/>}/>
        <Route path='/signin' element={!userData?<SignIn />: <Navigate to={'/'}/>} />
        <Route path='/signup' element={!userData?<SignUp />: <Navigate to={'/'}/>} />
        <Route path='/customize' element={userData?<Customize />: <Navigate to={'/signin'}/>}  />
      </Routes>
    </>
  )
}

export default App