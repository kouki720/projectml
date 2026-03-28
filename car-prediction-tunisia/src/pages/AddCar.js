// pages/AddCar.js
import React, { useState } from 'react';
import { Upload, Brain, FileText, Send, X, Camera, Sparkles } from 'lucide-react';

const AddCar = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuel: 'Essence',
    transmission: 'Manuelle',
    engineSize: '',
    power: '',
    description: ''
  });

  const [images, setImages] = useState([]);
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [suggestedDescription, setSuggestedDescription] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const predictPrice = () => {
    // Simulation de prédiction IA
    const basePrice = {
      'Renault': 45000,
      'Peugeot': 48000,
      'Volkswagen': 55000,
      'Toyota': 52000
    }[formData.brand] || 50000;

    const yearFactor = 2024 - parseInt(formData.year || 2020);
    const mileageFactor = parseInt(formData.mileage || 50000) / 10000;
    
    const price = basePrice - (yearFactor * 2000) - (mileageFactor * 1000);
    setPredictedPrice(Math.max(price, 20000).toFixed(0));
  };

  const generateDescription = () => {
    // Simulation de génération de description
    const desc = `Superbe ${formData.brand} ${formData.model} de ${formData.year} en parfait état. 
    Ce véhicule avec ${formData.mileage} km, motorisation ${formData.engineSize}L ${formData.fuel} 
    de ${formData.power}ch, offre un excellent rapport qualité-prix. 
    Transmission ${formData.transmission}, entretien régulier, première main. 
    Idéal pour les déplacements quotidiens ou les longs trajets.`;
    setSuggestedDescription(desc);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Mettre une voiture aux enchères
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez les informations ci-dessous pour commencer
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images Upload */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Camera className="mr-2 text-blue-600" size={24} />
                Photos du véhicule
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt={`Voiture ${index + 1}`}
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
                
                <label className="border-2 border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                  <Upload className="text-gray-400 mb-2" size={24} />
                  <span className="text-sm text-gray-500">Ajouter photo</span>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Car Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Détails du véhicule
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Marque
                  </label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionner</option>
                    <option>Renault</option>
                    <option>Peugeot</option>
                    <option>Volkswagen</option>
                    <option>Toyota</option>
                    <option>Citroën</option>
                    <option>Hyundai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modèle
                  </label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder="Ex: Clio 4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Année
                  </label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    placeholder="2019"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kilométrage
                  </label>
                  <input
                    type="number"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleInputChange}
                    placeholder="45000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Carburant
                  </label>
                  <select
                    name="fuel"
                    value={formData.fuel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Essence</option>
                    <option>Diesel</option>
                    <option>Hybride</option>
                    <option>Électrique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Transmission
                  </label>
                  <select
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Manuelle</option>
                    <option>Automatique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Moteur (L)
                  </label>
                  <input
                    type="text"
                    name="engineSize"
                    value={formData.engineSize}
                    onChange={handleInputChange}
                    placeholder="1.6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Puissance (ch)
                  </label>
                  <input
                    type="number"
                    name="power"
                    value={formData.power}
                    onChange={handleInputChange}
                    placeholder="115"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Brain className="mr-2 text-purple-600" size={24} />
                Assistance IA
              </h2>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={predictPrice}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Sparkles size={20} />
                  <span>Prédire le prix</span>
                </button>
                <button
                  onClick={generateDescription}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FileText size={20} />
                  <span>Suggérer description</span>
                </button>
              </div>

              {predictedPrice && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <p className="text-sm text-green-600 mb-1">Prix estimé</p>
                  <p className="text-3xl font-bold text-green-700">
                    {parseInt(predictedPrice).toLocaleString()} DT
                  </p>
                </div>
              )}

              {suggestedDescription && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-sm text-blue-600 mb-2">Description suggérée</p>
                  <textarea
                    value={suggestedDescription}
                    onChange={(e) => setSuggestedDescription(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Résumé
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Photos</span>
                  <span className="font-semibold">{images.length} téléchargées</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Marque/Modèle</span>
                  <span className="font-semibold">
                    {formData.brand || '-'} {formData.model || ''}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Année</span>
                  <span className="font-semibold">{formData.year || '-'}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Kilométrage</span>
                  <span className="font-semibold">
                    {formData.mileage ? `${formData.mileage} km` : '-'}
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Publier l'enchère</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                En publiant, vous acceptez nos conditions d'utilisation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;