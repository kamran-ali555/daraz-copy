import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection: React.FC = () => {
  const categories = [
    {
      name: "Mobiles",
      image: "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      url: "/category/mobiles"
    },
    {
      name: "Men's Fashion",
      image: "https://static-01.daraz.pk/p/5b7f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/mens-fashion"
    },
    {
      name: "Women's Fashion",
      image: "https://static-01.daraz.pk/p/2d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/womens-fashion"
    },
    {
      name: "Watches",
      image: "https://static-01.daraz.pk/p/7d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/watches"
    },
    {
      name: "Home Appliances",
      image: "https://static-01.daraz.pk/p/3e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/home-appliances"
    },
    {
      name: "Beauty & Health",
      image: "https://static-01.daraz.pk/p/9e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/beauty-health"
    },
    {
      name: "Laptops",
      image: "https://static-01.daraz.pk/p/b02e165334f197a7b5d86e59d9be9f63.jpg",
      url: "/category/laptops"
    },
    {
      name: "Groceries",
      image: "https://static-01.daraz.pk/p/4d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      url: "/category/groceries"
    }
  ];

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category, index) => (
          <Link key={index} to={category.url} className="category-card text-center">
            <div className="h-24 flex items-center justify-center mb-2">
              <img 
                src={category.image} 
                alt={category.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <p className="text-xs font-medium truncate">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// export default CategoriesSection;

export default CategoriesSection;