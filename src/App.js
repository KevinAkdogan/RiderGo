import React, { useState } from 'react';
import { MapPin, Menu, Euro, X, ChevronRight, Phone, Calendar } from 'lucide-react';

const RiderGoApp = () => {
  const [screen, setScreen] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const renderHeader = () => (
    <header className="p-6 flex justify-between items-center bg-blue-800 text-white sticky top-0 z-10">
      <h1 className="text-xl font-bold">RiderGo</h1>
      <button onClick={() => setMenuOpen(true)}>
        <Menu size={24} />
      </button>
    </header>
  );

  const renderHomeScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      <h2 className="text-xl font-semibold text-center">Bienvenue sur RiderGo</h2>
      <p className="text-center text-gray-700">
        Votre solution de transport rapide, abordable et personnalisée en Île-de-France.
      </p>
    </div>
  );

  const renderReservationScreen = () => (
    <div className="p-6 space-y-6 pb-24">
      <h2 className="text-xl font-semibold text-center">Réserver une course</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Nom :</label>
          <input
            type="text"
            placeholder="Entrez votre nom"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Prénom :</label>
          <input
            type="text"
            placeholder="Entrez votre prénom"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Adresse de départ :</label>
          <input
            type="text"
            placeholder="Adresse de départ"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Adresse d'arrivée :</label>
          <input
            type="text"
            placeholder="Adresse d'arrivée"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-800 text-white p-3 rounded mt-4 hover:bg-blue-900"
        >
          Réserver
        </button>
      </form>
    </div>
  );

  const renderPricingScreen = () => (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-6">Nos Tarifs</h2>
      <div className="rounded-lg shadow-lg p-6 bg-blue-800">
        <div className="space-y-6">
          {[
            { label: "Moins de 10 km", price: "2,00€/km" },
            { label: "Entre 10 et 20 km", price: "1,80€/km" },
            { label: "Plus de 20 km", price: "1,70€/km" },
            { label: "Service de coursier", price: "1,60€/km" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-black bg-opacity-75 text-white rounded-lg px-4 py-3 shadow-md"
            >
              <span className="text-lg font-medium">{item.label}</span>
              <span className="text-lg font-bold">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactScreen = () => (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold text-center">Contactez-nous</h2>
      <p className="text-center text-gray-700">
        Besoin d'aide ? Vous pouvez nous joindre au :
      </p>
      <p className="text-center text-blue-800 font-bold text-lg">+33 6 12 34 56 78</p>
      <p className="text-center text-gray-700">
        ou par email à : <span className="text-blue-800">support@ridergo.fr</span>
      </p>
    </div>
  );

  const renderMenu = () => (
    <div className="fixed inset-0 bg-black/90 z-50">
      <div className="bg-white h-full w-64 p-6">
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-xl">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <button
            className="flex items-center w-full p-2 hover:bg-gray-100 rounded"
            onClick={() => {
              setScreen('home');
              setMenuOpen(false);
            }}
          >
            <MapPin size={20} className="mr-3 text-blue-800" />
            Accueil
            <ChevronRight size={20} className="ml-auto" />
          </button>
          <button
            className="flex items-center w-full p-2 hover:bg-gray-100 rounded"
            onClick={() => {
              setScreen('reservation');
              setMenuOpen(false);
            }}
          >
            <Calendar size={20} className="mr-3 text-blue-800" />
            Réservation
            <ChevronRight size={20} className="ml-auto" />
          </button>
          <button
            className="flex items-center w-full p-2 hover:bg-gray-100 rounded"
            onClick={() => {
              setScreen('pricing');
              setMenuOpen(false);
            }}
          >
            <Euro size={20} className="mr-3 text-blue-800" />
            Tarifs
            <ChevronRight size={20} className="ml-auto" />
          </button>
          <button
            className="flex items-center w-full p-2 hover:bg-gray-100 rounded"
            onClick={() => {
              setScreen('contact');
              setMenuOpen(false);
            }}
          >
            <Phone size={20} className="mr-3 text-blue-800" />
            Contact
            <ChevronRight size={20} className="ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderBottomNav = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-md mx-auto flex justify-around p-3">
        {[
          { icon: MapPin, label: 'Accueil', screen: 'home' },
          { icon: Calendar, label: 'Réservation', screen: 'reservation' },
          { icon: Euro, label: 'Tarifs', screen: 'pricing' },
          { icon: Phone, label: 'Contact', screen: 'contact' },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => setScreen(item.screen)}
            className={`flex flex-col items-center ${screen === item.screen ? 'text-blue-800' : 'text-gray-400'}`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );

  return (
    <div className="w-full h-screen max-w-md mx-auto relative overflow-hidden bg-gray-100">
      {renderHeader()}
      <div className="h-full overflow-y-auto">
        {screen === 'home' && renderHomeScreen()}
        {screen === 'reservation' && renderReservationScreen()}
        {screen === 'pricing' && renderPricingScreen()}
        {screen === 'contact' && renderContactScreen()}
      </div>
      {renderBottomNav()}
      {menuOpen && renderMenu()}
    </div>
  );
};

export default RiderGoApp;
