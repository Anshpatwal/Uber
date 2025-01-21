import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = ({ email, password });

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/login`, newUser)
      if (response.status == 200) {
        localStorage.setItem('token', response.data.token)
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
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-black font-medium mb-2">
                What&apos;s Your Email
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
          <h5>New Here?</h5>
          <Link to="/signup" className="underline-offset-1 underline">
            Create An Account.
          </Link>
        </div>

        {/* Sign in as Captain */}
        <div className="flex flex-col gap-4 mt-auto">
          <Link className="text-center" to="/captain-login">
            <button className="w-full bg-yellow-400 text-white font-semibold py-3 rounded-md hover:bg-gray-800 transition">
              Sign in as Captain
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
