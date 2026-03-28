// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, Shield, Award, ArrowRight, ChevronRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <TrendingUp size={32} />,
      title: 'Prédiction IA',
      description: 'Algorithmes avancés pour estimer le prix de votre véhicule avec précision',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Clock size={32} />,
      title: 'Enchères en direct',
      description: 'Participez aux enchères en temps réel depuis votre confort',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Shield size={32} />,
      title: '100% Sécurisé',
      description: 'Transactions sécurisées et vérification des véhicules',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Award size={32} />,
      title: 'Expertise locale',
      description: 'Spécialiste du marché automobile tunisien depuis 2020',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Voitures vendues' },
    { value: '1000+', label: 'Membres actifs' },
    { value: '98%', label: 'Clients satisfaits' },
    { value: '24/7', label: 'Support disponible' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CarPredict Tunisie
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              La première plateforme d'enchères automobiles avec prédiction de prix par intelligence artificielle en Tunisie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cars"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105"
              >
                <span>Explorer les voitures</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/auctions"
                className="bg-white bg-opacity-20 backdrop-blur-lg hover:bg-opacity-30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Enchères en direct
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="fill-current text-white" viewBox="0 0 1440 100">
            <path d="M0,50 C200,0 400,100 600,50 C800,0 1000,100 1200,50 C1400,0 1440,50 1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir CarPredict ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète pour tous vos besoins automobiles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à commencer votre expérience ?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Rejoignez des milliers d'utilisateurs qui nous font confiance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signin"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Créer un compte gratuit
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;