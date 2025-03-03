import React from 'react';
import ProductCard from './ProductCard';

const JustForYou: React.FC = () => {
  // Mock products
  const products = [
    {
      id: 101,
      name: "Wireless Bluetooth Headphones",
      image: "https://static-01.daraz.pk/p/b02e165334f197a7b5d86e59d9be9f63.jpg",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.5
    },
    {
      id: 102,
      name: "Men's Casual Shirt",
      image: "https://static-01.daraz.pk/p/5b7f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 899,
      originalPrice: 1799,
      discount: 50,
      rating: 4.2
    },
    {
      id: 103,
      name: "Smart Watch with Heart Rate Monitor",
      image: "https://static-01.daraz.pk/p/7d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 3499,
      originalPrice: 6999,
      discount: 50,
      rating: 4.7
    },
    {
      id: 104,
      name: "Portable Bluetooth Speaker Waterproof",
      image: "https://static-01.daraz.pk/p/9e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      rating: 4.3
    },
    {
      id: 105,
      name: "Women's Shoulder Bag",
      image: "https://static-01.daraz.pk/p/2d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      rating: 4.1
    },
    {
      id: 106,
      name: "Gaming Mouse with RGB Lighting",
      image: "https://static-01.daraz.pk/p/3e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1799,
      originalPrice: 3599,
      discount: 50,
      rating: 4.6
    },
    {
      id: 107,
      name: "Smartphone 6GB RAM 128GB Storage",
      image: "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
      rating: 4.8
    },
    {
      id: 108,
      name: "Electric Kettle Stainless Steel",
      image: "https://static-01.daraz.pk/p/4d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1299,
      originalPrice: 2599,
      discount: 50,
      rating: 4.4
    },
    {
      id: 109,
      name: "Laptop Backpack Waterproof",
      image: "https://static-01.daraz.pk/p/8d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      rating: 4.5
    },
    {
      id: 110,
      name: "Digital Kitchen Scale",
      image: "https://static-01.daraz.pk/p/6d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 899,
      originalPrice: 1799,
      discount: 50,
      rating: 4.2
    },
    {
      id: 111,
      name: "Wireless Keyboard and Mouse Combo",
      image: "https://static-01.daraz.pk/p/1d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.3
    },
    {
      id: 112,
      name: "Fitness Yoga Mat",
      image: "https://static-01.daraz.pk/p/0d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 999,
      originalPrice: 1999,
      discount: 50,
      rating: 4.1
    }
  ];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4">Just For You</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default JustForYou;