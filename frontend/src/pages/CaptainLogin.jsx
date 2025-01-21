import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin =  () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const { captain, setCaptain } = React.useContext(CaptainDataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const captainData = ({ email, password });
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captain/login`, captainData)
      if (response.status == 200) {
        const data = response.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (

    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-[400px] h-[750px] bg-white rounded-md shadow-md p-6 flex flex-col">
        {/* Title */}
        <h2 className="text-2xl font-bold text-black">Uber</h2>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-10">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-black font-medium mb-2">
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-black font-medium mb-2">
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="flex gap-2 mt-2">
          <h5>Join a Fleet</h5>
          <Link to="/captain-signup" className="underline-offset-1 underline">
            Register as a Captain.
          </Link>
        </div>

        {/* Sign in as Captain */}
        <div className="flex flex-col gap-4 mt-auto">
          <Link className="text-center" to="/login">
            <button className="w-full bg-purple-500 text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition">
              Sign in as User
            </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default CaptainLogin
