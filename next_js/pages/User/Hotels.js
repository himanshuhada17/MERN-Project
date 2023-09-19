import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/hotels')
      .then((response) => {
        setHotels(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white p-4 rounded-lg shadow-md transform hover:scale-105">
            <img src={hotel.image} alt={hotel.name} className="w-full h-50 object-cover object-center mb-4" />
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;
