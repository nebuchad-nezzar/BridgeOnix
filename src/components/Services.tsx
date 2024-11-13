import React from 'react';
import { Package, Truck, MapPin, Shield } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive logistics solutions tailored to your needs</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <Package className="h-12 w-12 text-blue-600 mb-6"/>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">International Freight</h3>
            <p className="text-gray-600 mb-6"> 
            Effortlessly manage cross-border shipping with our versatile international freight solutions. From air and ocean to ground transport, 
            our extensive logistics network has you covered for seamless, reliable global delivery.
            </p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <Truck className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Supply Chain Solutions</h3>
            <p className="text-gray-600 mb-6">Simplify cross-border logistics with our global shipping solutions, covering over 220 countries.
               Enjoy seamless door-to-door delivery and hassle-free customs clearance for efficient international shipping.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <MapPin className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Warehousing and Delivery</h3>
            <p className="text-gray-600 mb-6">Streamline your inventory with international warehousing, ensuring quick, efficient deliveries from
               locations close to your customers. Benefit from optimized inventory management and fast fulfillment to enhance customer 
               satisfaction.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance & Documentation</h3>
            <p className="text-gray-600 mb-6">Automated compliance and documentation handling for hassle-free international shipping. With IOSS-ready service and EU VAT compliance ready.</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</button>
          </div>
        </div>
      </div>
    </div>
  );
}