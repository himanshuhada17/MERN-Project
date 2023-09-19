import React, { useState } from 'react';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Link from 'next/link'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
<>
<nav className="w-full bg-blue-500 p-3 md:p-7 rounded-b-xl">
  <ul className="flex flex-wrap md:flex-nowrap space-x-2 md:space-x-10 items-center pr-2 md:pr-0 md:pl-5">
    <li className="text-white flex items-center text-sm md:text-base mb-2 md:mb-0">
      <HotelIcon className='h-6 w-6 md:mr-2' /> 
      <Link href="/User/Hotels" className="hover:text-blue-800">Hotels</Link>
    </li>
    <li className="text-white flex items-center text-sm md:text-base mb-2 md:mb-0">
      <DirectionsBusIcon className='h-6 w-6 md:mr-2' /> 
      <Link href="/User/Search" className="hover:text-blue-800">Buses</Link>
    </li>
    <li className="text-white flex items-center text-sm md:text-base mb-2 md:mb-0">
      <FlightIcon className='h-6 w-6 md:mr-2' /> 
      <a href="/contact" className="hover:text-blue-800">Flights</a>
    </li>
    <li className="text-white flex items-center text-sm md:text-base hidden md:block">
      <Link href="/User/Login" className="hover:text-blue-800">Login</Link>
    </li>
    <li className="text-white flex items-center text-sm md:text-base mb-2 md:mb-0">
      <Link href="/User/Signup" className="hover:text-blue-800">Signup</Link>
    </li>
    <li className="text-white flex items-center text-sm md:text-base ml-auto">
      <AccountBoxIcon className='h-6 w-6 md:mr-2' /> 
      <Link href="/User/Accounts" className="hover:text-blue-800">Account</Link>
    </li>
  </ul>
</nav>

<div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      {loggedIn ? (
        <p className="text-green-500 text-center">
          Welcome, {email}! You are now logged in.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
    </>
  );
};

export default LoginForm;
