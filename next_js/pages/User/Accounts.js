import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function SignupData() {
  const [signupData, setSignupData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/user') 
      .then((response) => {
        setSignupData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:5000/user/${userId}`) 
      .then((response) => {
        setSignupData((prevData) => prevData.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

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

    <div className="bg-white p-4 rounded-lg ">
      <h1 className="text-2xl font-semibold mb-4">Linked Accounts</h1>
      <ul>
  {signupData.map((user) => (
    <li key={user.id} className="border-b border-gray-300 pb-4 mb-4">
      <h2 className="text-xl font-semibold">{user.f_name} {user.l_name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <button
        onClick={() => handleDeleteUser(user.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

    </div>
</>
  );
}

export default SignupData;
