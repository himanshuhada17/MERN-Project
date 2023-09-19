import React, { useState } from 'react';
import axios from 'axios';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Link from 'next/link'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/user', formData);

      if (response.status === 200) {
        alert('Registration successful! User ID: ' + response.data.id);
        setFormData({
          f_name: '',
          l_name: '',
          email: '',
          password: '',
        });
      }
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
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
      <h2 className="text-2xl text-center font-semibold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">First Name:</label>
          <input
            type="text"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Last Name:</label>
          <input
            type="text"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignupForm;
