// pages/Cars.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Fuel, Gauge, Calendar, Settings2, ChevronLeft, ChevronRight } from 'lucide-react';

const Cars = () => {
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    fuel: '',
    transmission: ''
  });

  const cars = [
    {
      id: 1,
      brand: 'Renault',
      model: 'Clio 4',
      year: 2019,
      price: 45000,
      currentBid: 48500,
      mileage: 45000,
      fuel: 'Essence',
      transmission: 'Manuelle',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      auctionEnd: '2024-03-20T18:00:00',
      bidders: 12,
      timeLeft: '2j 5h'
    },
    {
      id: 2,
      brand: 'Peugeot',
      model: '208',
      year: 2020,
      price: 52000,
      currentBid: 55000,
      mileage: 30000,
      fuel: 'Diesel',
      transmission: 'Manuelle',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      auctionEnd: '2024-03-18T20:00:00',
      bidders: 8,
      timeLeft: '1j 3h'
    },
    {
      id: 3,
      brand: 'Volkswagen',
      model: 'Golf 7',
      year: 2018,
      price: 65000,
      currentBid: 68000,
      mileage: 60000,
      fuel: 'Essence',
      transmission: 'Automatique',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      auctionEnd: '2024-03-22T15:00:00',
      bidders: 15,
      timeLeft: '3j 2h'
    },
    {
      id: 4,
      brand: 'Toyota',
      model: 'Yaris',
      year: 2021,
      price: 58000,
      currentBid: 61000,
      mileage: 25000,
      fuel: 'Hybride',
      transmission: 'Automatique',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      auctionEnd: '2024-03-19T10:00:00',
      bidders: 10,
      timeLeft: '1j 4h'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Enchères en direct
          </h1>
          <p className="text-xl text-gray-600">
            {cars.length} voitures disponibles
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter size={20} className="text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filtres</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.brand}
              onChange={(e) => setFilters({...filters, brand: e.target.value})}
            >
              <option value="">Toutes marques</option>
              <option>Renault</option>
              <option>Peugeot</option>
              <option>Volkswagen</option>
              <option>Toyota</option>
            </select>

            <input
              type="number"
              placeholder="Prix min (DT)"
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.minPrice}
              onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
            />

            <input
              type="number"
              placeholder="Prix max (DT)"
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.maxPrice}
              onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
            />

            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filters.fuel}
              onChange={(e) => setFilters({...filters, fuel: e.target.value})}
            >
              <option value="">Carburant</option>
              <option>Essence</option>
              <option>Diesel</option>
              <option>Hybride</option>
            </select>

            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Search size={20} />
              <span>Filtrer</span>
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Enchère
                </div>
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Clock size={14} />
                  <span>{car.timeLeft}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h3>

                {/* Price Info */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Prix de départ</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {car.price.toLocaleString()} DT
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Enchère actuelle</p>
                    <p className="text-xl font-bold text-green-600">
                      {car.currentBid.toLocaleString()} DT
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Gauge size={16} />
                    <span>{car.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Fuel size={16} />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Settings2 size={16} />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                {/* Bidder Info */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="text-gray-500">{car.bidders} enchérisseurs</span>
                  <span className="text-blue-600 font-semibold">+{((car.currentBid - car.price) / car.price * 100).toFixed(1)}%</span>
                </div>

                {/* Actions */}
                <Link
                  to={`/car/${car.id}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-12 h-12 bg-blue-600 text-white rounded-xl font-semibold">1</button>
          <button className="w-12 h-12 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">2</button>
          <button className="w-12 h-12 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">3</button>
          <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;