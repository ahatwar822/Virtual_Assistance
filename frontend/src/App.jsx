import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast'

const App = () => {
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
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App