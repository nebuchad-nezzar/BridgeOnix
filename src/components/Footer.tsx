import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2 } from 'lucide-react';
import logo from '/public/images/brigdeOnix.png';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
            <img src={logo} alt="BridgeOnix Logo" className="h-14 w-14" />
              <span className="text-xl font-bold text-white">BridgeOnix</span>
            </div>
            <p className="text-gray-400">Premium cross-border logistics solutions for modern businesses.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
            <li><Link to="/international-freight" className="hover:text-blue-500">International Freight</Link></li>
              <li><Link to="/supply-chain" className="hover:text-blue-500">Supply Chain</Link></li>
              <li><Link to="/last-mile-delivery" className="hover:text-blue-500">Last Mile Delivery</Link></li>
              <li><Link to="/customs-clearance" className="hover:text-blue-500">Customs Clearance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-500">Careers</Link></li>
              <li><Link to="/press" className="hover:text-blue-500">Press</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Twitter</a></li>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Instagram</a></li>
            </ul>
          </div>
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BridgeOnix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}