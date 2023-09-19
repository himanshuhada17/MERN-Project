import React, { useState } from 'react';
import Cards from '@/Components/Cards'
import Link from 'next/link'
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FlightIcon from '@mui/icons-material/Flight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
function BusSearch() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    console.log(`Searching for buses from ${source} to ${destination} on ${date}`);
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

<div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Search for Buses</h1>
      <form className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="source">
            Source:
          </label>
          <input
            type="text"
            id="source"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="destination">
            Destination:
          </label>
          <input
            type="text"
            id="destination"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            type="date"
            id="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
    <Cards/>
    </>
  );
}

export default BusSearch;
