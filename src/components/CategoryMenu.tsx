import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const CategoryMenu: React.FC = () => {
  const categories = [
    {
      name: "Groceries & Pets",
      icon: "https://icms-image.slatic.net/images/ims-web/458d4688-f305-4401-8bfc-1cdce5e1f626.png",
      url: "/category/groceries-pets"
    },
    {
      name: "Health & Beauty",
      icon: "https://icms-image.slatic.net/images/ims-web/6c3a9fa1-d80a-4d6a-9bd1-e6483ddbbb63.png",
      url: "/category/health-beauty"
    },
    {
      name: "Men's Fashion",
      icon: "https://icms-image.slatic.net/images/ims-web/a5c4e25a-f60e-4b05-b9e9-a8cd21c00a3e.png",
      url: "/category/mens-fashion"
    },
    {
      name: "Women's Fashion",
      icon: "https://icms-image.slatic.net/images/ims-web/d85f0ced-6859-455a-8504-150655bf948a.png",
      url: "/category/womens-fashion"
    },
    {
      name: "Mother & Baby",
      icon: "https://icms-image.slatic.net/images/ims-web/f9dbf825-5d6e-4a46-be51-30aaa5c0f1b3.png",
      url: "/category/mother-baby"
    },
    {
      name: "Home & Lifestyle",
      icon: "https://icms-image.slatic.net/images/ims-web/d0b6a73d-b0e5-4001-9a77-f5c1998a5df5.png",
      url: "/category/home-lifestyle"
    },
    {
      name: "Electronic Devices",
      icon: "https://icms-image.slatic.net/images/ims-web/c288a206-be20-4374-a8d7-987d36d1b770.png",
      url: "/category/electronic-devices"
    },
    {
      name: "Electronic Accessories",
      icon: "https://icms-image.slatic.net/images/ims-web/b6d93c13-4d6a-4a0f-a7c8-383a8c772f3b.png",
      url: "/category/electronic-accessories"
    },
    {
      name: "TV & Home Appliances",
      icon: "https://icms-image.slatic.net/images/ims-web/e0c6dd80-c6a9-4630-80b6-4a4ca8924e3d.png",
      url: "/category/tv-home-appliances"
    },
    {
      name: "Sports & Outdoor",
      icon: "https://icms-image.slatic.net/images/ims-web/c5c66b5f-0955-4c66-9e76-3062a1c1027a.png",
      url: "/category/sports-outdoor"
    }
  ];

  return (
    <div className="bg-white rounded shadow">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className={`${index !== categories.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <Link 
              to={category.url}
              className="flex items-center py-2 px-4 hover:bg-daraz-lightgray transition-colors"
            >
              <img 
                src={category.icon} 
                alt={category.name} 
                className="w-6 h-6 mr-3"
              />
              <span className="text-sm flex-grow">{category.name}</span>
              <ChevronRight size={16} className="text-daraz-gray" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;