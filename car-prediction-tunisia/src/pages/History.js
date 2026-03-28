// pages/History.js
import React, { useState } from 'react';
import { Search, Filter, Trophy, Users, Calendar, ChevronDown, ArrowUpDown } from 'lucide-react';

const History = () => {
  const [filter, setFilter] = useState('all');

  const completedAuctions = [
    {
      id: 1,
      car: 'Renault Clio 4',
      year: 2019,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      startPrice: 45000,
      finalPrice: 52300,
      bidders: 15,
      endDate: '15/03/2024',
      status: 'Vendu'
    },
    {
      id: 2,
      car: 'Peugeot 208',
      year: 2020,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      startPrice: 52000,
      finalPrice: 58700,
      bidders: 12,
      endDate: '14/03/2024',
      status: 'Vendu'
    },
    {
      id: 3,
      car: 'Volkswagen Golf 7',
      year: 2018,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      startPrice: 65000,
      finalPrice: 71200,
      bidders: 18,
      endDate: '13/03/2024',
      status: 'Vendu'
    },
    {
      id: 4,
      car: 'Toyota Yaris',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      startPrice: 58000,
      finalPrice: 63400,
      bidders: 10,
      endDate: '12/03/2024',
      status: 'Vendu'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Historique des enchères
          </h1>
          <p className="text-xl text-gray-600">
            {completedAuctions.length} enchères terminées
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Trophy className="text-blue-600" size={24} />
              </div>
              <span className="text-3xl font-bold text-gray-900">42</span>
            </div>
            <p className="text-gray-600">Enchères gagnées</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <span className="text-3xl font-bold text-gray-900">156</span>
            </div>
            <p className="text-gray-600">Enchérisseurs</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="text-purple-600" size={24} />
              </div>
              <span className="text-3xl font-bold text-gray-900">28</span>
            </div>
            <p className="text-gray-600">Jours d'enchères</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <span className="text-orange-600 font-bold text-xl">DT</span>
              </div>
              <span className="text-3xl font-bold text-gray-900">2.4M</span>
            </div>
            <p className="text-gray-600">Volume total</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une voiture..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Toutes les périodes</option>
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
              <option value="year">Cette année</option>
            </select>

            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
              <Filter size={20} />
              <span>Filtres</span>
            </button>

            <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
              <ArrowUpDown size={20} />
              <span>Trier</span>
            </button>
          </div>
        </div>

        {/* Auctions List */}
        <div className="space-y-4">
          {completedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-64 h-48 md:h-auto">
                  <img
                    src={auction.image}
                    alt={auction.car}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {auction.car}
                      </h3>
                      <p className="text-gray-600">Année {auction.year}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {auction.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Prix de départ</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {auction.startPrice.toLocaleString()} DT
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Prix final</p>
                      <p className="text-xl font-bold text-green-600">
                        {auction.finalPrice.toLocaleString()} DT
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Enchérisseurs</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {auction.bidders}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Date de fin</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {auction.endDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-green-600">
                        +{((auction.finalPrice - auction.startPrice) / auction.startPrice * 100).toFixed(1)}%
                      </span> au-dessus du prix de départ
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1">
                      <span>Voir détails</span>
                      <ChevronDown size={20} className="transform -rotate-90" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;