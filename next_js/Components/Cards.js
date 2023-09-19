import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BusList() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:5000/buses';

    axios.get(apiUrl)
      .then((response) => {
        setBuses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-center">Buses Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {buses.map((bus) => (
          <div key={bus.id} className="bg-white shadow-md rounded p-4">
            <h2 className="text-xl font-semibold mb-2">{bus.title}</h2>
            <p className="text-gray-600 mb-2">Description: {bus.desc}</p>
            <p className="text-gray-600 mb-2">Price: {bus.price}</p>
            <p className="text-gray-600 mb-2">Duration: {bus.duration}</p>
            <p className="text-gray-600">Seats Left: {bus.seatsleft}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusList;
