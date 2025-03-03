import React from 'react';
import Banner from '../components/Banner';
import CategoryMenu from '../components/CategoryMenu';
import FlashSale from '../components/FlashSale';
import MallSection from '../components/MallSection';
import CategoriesSection from '../components/CategoriesSection';
import JustForYou from '../components/JustForYou';

const HomePage: React.FC = () => {
  return (
    <div className="bg-daraz-lightgray min-h-screen pb-8">
      <div className="container-custom py-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Menu - Left Sidebar */}
          <div className="hidden md:block">
            <CategoryMenu />
          </div>
          
          {/* Main Content */}
          <div className="md:col-span-3">
            <Banner />
          </div>
        </div>
        
        {/* Flash Sale Section */}
        <div className="mt-4">
          <FlashSale />
        </div>
        
        {/* Categories Section */}
        <div className="mt-4">
          <CategoriesSection />
        </div>
        
        {/* Daraz Mall Section */}
        <div className="mt-4">
          <MallSection />
        </div>
        
        {/* Just For You Section */}
        <div className="mt-4">
          <JustForYou />
        </div>
      </div>
    </div>
  );
};

export default HomePage;