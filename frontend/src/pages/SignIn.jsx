import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userDatacontext } from '../context/userContext'
import axios from 'axios'
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const { serverUrl } = useContext(userDatacontext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${serverUrl}/api/auth/login`,
        formData,
        { withCredentials: true }
      );

      toast.success(res.data.message); // success toast
      navigate("/");

    } catch (error) {

      if (error.response) {
        toast.error(error.response.data.message); // backend message
      } else {
        toast.error("Something went wrong");
      }

      console.log(error);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(https://plus.unsplash.com/premium_photo-1676842096847-fed08daa0c8f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&h=1000)` }}
      className='w-full h-screen bg-cover flex items-center justify-center relative overflow-hidden'>

      <form
        method='POST'
        onSubmit={handleSubmit}
        className='w-[90%] max-w-125 bg-[#00000085] backdrop-blur rounded-2xl shadow-2xl shadow-cyan-500/20 border border-cyan-500/30 flex flex-col items-center justify-center gap-6 px-8 py-12 relative z-10'
      >
        {/* Heading */}
        <div className='text-center mb-6'>
          <h2 className='text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent mb-3'>
            Login
          </h2>
          <p className='text-cyan-600 text-sm font-light tracking-widest'>
            TO VIRTUAL ASSISTANT
          </p>
        </div>

        {/* Email Field */}
        <div className='relative w-[95%] border-b-2 border-cyan-500/50 pb-2 group mt-6'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full bg-transparent outline-none text-white text-base placeholder-transparent focus:border-cyan-400 transition-colors duration-300'
            placeholder='email'
          />
          <label className='absolute left-0 top-1/2 -translate-y-1/2 text-cyan-300 text-base pointer-events-none transition-all duration-300 group-focus-within:text-xs group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:text-cyan-400'
            style={formData.email ? { fontSize: '0.75rem', top: '0', transform: 'translateY(-50%)', color: '#22d3ee' } : {}}
          >
            Enter your email
          </label>
        </div>

        {/* Password Field */}
        <div className='relative w-[95%] border-b-2 border-cyan-500/50 pb-2 group mt-6'>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full bg-transparent outline-none text-white text-base placeholder-transparent focus:border-cyan-400 transition-colors duration-300'
            placeholder='password'
          />
          <label className='absolute left-0 top-1/2 -translate-y-1/2 text-cyan-300 text-base pointer-events-none transition-all duration-300 group-focus-within:text-xs group-focus-within:top-0 group-focus-within:-translate-y-1/2 group-focus-within:text-cyan-400'
            style={formData.password ? { fontSize: '0.75rem', top: '0', transform: 'translateY(-50%)', color: '#22d3ee' } : {}}
          >
            Enter your password
          </label>
        </div>

        {/* Login Button */}
        <button
          type='submit'
          disabled={loading}
          className='w-[95%] mt-8 relative overflow-hidden shadow-lg shadow-cyan-800/40 border-2 border-cyan-200/50 group cursor-pointer'
        >
          <div className='absolute inset-0 bg-linear-to-r from-cyan-500 to-cyan-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out'></div>
          <span className='relative block font-thin py-3 px-6 text-white  group-hover:text-white hover:font-bold transition-colors duration-300 ease-out'>
            {loading ? "⏳ Logging in..." : "LOGIN"}
          </span>
        </button>

        {/* Sign Up Link */}
        <div className='text-center mt-4'>
          <p className='text-cyan-100 text-sm'>
            Don't have an account?{' '}
            <button
              type='button'
              onClick={() => navigate('/signup')}
              className='text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-2 transition-colors duration-300 cursor-pointer'
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default SignIn