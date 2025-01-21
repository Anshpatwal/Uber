import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios';

const CaptainSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = ({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    });
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/captain/register`, captainData)
      if (response.status == 201) {
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
            {/* Name Fields */}
            <div>
              <label
                htmlFor="name"
                className="block text-black font-medium mb-2"
              >
                What&apos;s Your Name
              </label>
              <div className="flex justify-between">
                <input
                  type="text"
                  id="firstName"
                  className="w-[46%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  id="lastName"
                  className="w-[46%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-black font-medium mb-2"
              >
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
              <label
                htmlFor="password"
                className="block text-black font-medium mb-2"
              >
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
            <h3 className='text-lg font-medium '>Vehicle Information</h3>
            <div className='flex gap-4 mb-2'>
              <input
                required
                className=' w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value)
                }}
              />
              <input
                required
                className=' w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="text"
                placeholder='Vehicle Plate'
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value)
                }}
              />
            </div>
            <div className='flex gap-4 mb-4'>
              <input
                required
                className=' w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type="number"
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value)
                }}
              />
              <select
                required
                className=' w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Register as Captain
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="flex gap-2 mt-2">
          <h5>Already have an Account?</h5>
          <Link to="/captain-login" className="underline-offset-1 underline">
            Log In as Captain
          </Link>
        </div>

        {/* Privacy Policy */}
        <div className="mt-[13rem] text-sm text-gray-600">
          We respect your privacy. Your data is securely stored and used solely for managing your account and trip assignments.
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
