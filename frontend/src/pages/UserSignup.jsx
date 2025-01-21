import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const UserSignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname, lastname
      },
      email, password
    }

    try {
      console.log(newUser)
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/register`, newUser)
      console.log(response)
      if (response.status == 201) {
        const data = response.data
        console.log(data)
        localStorage.setItem('token', data.token)
        navigate('/home')
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
            {/* NAME */}
            <div>
              <label
                className="block text-black font-medium mb-2"
              >
                What&apos;s Your Name
              </label>
              <div className="flex justify-between">
                <input
                  type="text"
                  id="firstname"
                  className="w-[46%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                  type="text"
                  id="lastname"
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
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-8">
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition"
            >
              Create User Account
            </button>
          </div>
        </form>

        {/* Create Account Link */}
        <div className="flex gap-2 mt-2">
          <h5>Already have an Account?</h5>
          <Link to="/login" className="underline-offset-1 underline">
            Log In
          </Link>
        </div>

        {/* Privacy Policy */}
        <div className="mt-[13rem] text-center text-sm text-gray-600">
          By signing up, you agree to our{" "}
          <Link to="/privacy-policy" className="underline">
            Privacy Policy
          </Link>{" "}
          and acknowledge how we handle your data responsibly.
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
