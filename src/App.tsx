import React from 'react';
import { Globe2, Truck, Shield, BarChart3, ArrowRight, Package, Clock, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;