import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Career from './pages/Career';
import Press from './pages/Press';
import InternationalFreight from './pages/InternationalFreight';
import SupplyChain from './pages/SupplyChain';
import LastMileDelivery from './pages/LastMileDelivery';
import CustomsClearance from './pages/CustomsClearance';
import PrivateRoute from './components/PrivateRoute';





function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/international-freight" element={<InternationalFreight />} />
            <Route path="/supply-chain" element={<SupplyChain />} />
            <Route path="/last-mile-delivery" element={<LastMileDelivery />} />
            <Route path="/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/press" element={<Press />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;