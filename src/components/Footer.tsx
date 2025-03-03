import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, CreditCard, Shield, Truck, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const customerCareLinks = [
    { name: 'Help Center', url: '#' },
    { name: 'How to Buy', url: '#' },
    { name: 'Corporate & Bulk Purchasing', url: '#' },
    { name: 'Returns & Refunds', url: '#' },
    { name: 'Daraz Shop', url: '#' },
    { name: 'Contact Us', url: '#' },
    { name: 'Purchase Protection', url: '#' },
  ];

  const darazLinks = [
    { name: 'About Daraz', url: '#' },
    { name: 'Digital Payments', url: '#' },
    { name: 'Daraz Affiliate Program', url: '#' },
    { name: 'Careers', url: '#' },
    { name: 'Terms & Conditions', url: '#' },
    { name: 'Privacy Policy', url: '#' },
    { name: 'Online Shopping App', url: '#' },
  ];

  const paymentMethods = [
    'Visa', 'Mastercard', 'American Express', 'JazzCash', 'EasyPaisa', 'Cash on Delivery'
  ];

  return (
    <footer className="bg-white pt-10 border-t">
      {/* Customer Service Section */}
      <div className="container-custom mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Truck className="text-daraz-orange mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-daraz-gray text-center md:text-left">Delivery all over Pakistan</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <CreditCard className="text-daraz-orange mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
            <p className="text-sm text-daraz-gray text-center md:text-left">100% secure payment</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <Shield className="text-daraz-orange mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
            <p className="text-sm text-daraz-gray text-center md:text-left">Original products guaranteed</p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <Phone className="text-daraz-orange mb-3" size={32} />
            <h3 className="font-bold text-lg mb-2">24/7 Customer Support</h3>
            <p className="text-sm text-daraz-gray text-center md:text-left">Friendly 24/7 customer support</p>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container-custom pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Care</h3>
            <ul className="space-y-2">
              {customerCareLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-daraz-gray hover:text-daraz-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Daraz</h3>
            <ul className="space-y-2">
              {darazLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} className="text-sm text-daraz-gray hover:text-daraz-orange transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method, index) => (
                <span key={index} className="text-xs bg-daraz-lightgray px-2 py-1 rounded">
                  {method}
                </span>
              ))}
            </div>
            
            <h3 className="font-bold text-lg mt-6 mb-4">Delivery Services</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-daraz-lightgray px-2 py-1 rounded">Daraz Express</span>
              <span className="text-xs bg-daraz-lightgray px-2 py-1 rounded">TCS</span>
              <span className="text-xs bg-daraz-lightgray px-2 py-1 rounded">Leopards</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-daraz-gray hover:text-daraz-orange transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-daraz-gray hover:text-daraz-orange transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-daraz-gray hover:text-daraz-orange transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-daraz-gray hover:text-daraz-orange transition-colors">
                <Youtube size={24} />
              </a>
            </div>
            
            <h3 className="font-bold text-lg mb-4">Daraz Mobile App</h3>
            <p className="text-sm text-daraz-gray mb-2">Get access to exclusive offers!</p>
            <div className="flex space-x-2">
              <a href="#" className="block">
                <img 
                  src="https://icms-image.slatic.net/images/ims-web/3ae67ef5-e5f6-42c3-9a40-993ef9a7bfae.png" 
                  alt="App Store" 
                  className="h-8"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://icms-image.slatic.net/images/ims-web/4d6d0981-9dad-428b-8cb2-8ae837f36f83.png" 
                  alt="Google Play" 
                  className="h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-daraz-lightgray py-4">
        <div className="container-custom">
          <p className="text-center text-sm text-daraz-gray">
            © Daraz 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;