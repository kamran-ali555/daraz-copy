import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';

const FlashSale: React.FC = () => {
  // Mock flash sale products
  const flashSaleProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      image: "https://static-01.daraz.pk/p/b02e165334f197a7b5d86e59d9be9f63.jpg",
      price: 1299,
      originalPrice: 3999,
      discount: 68,
      sold: 120,
      total: 200
    },
    {
      id: 2,
      name: "Men's Casual T-Shirt",
      image: "https://static-01.daraz.pk/p/5b7f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 499,
      originalPrice: 1299,
      discount: 62,
      sold: 85,
      total: 100
    },
    {
      id: 3,
      name: "Smart Watch Fitness Tracker",
      image: "https://static-01.daraz.pk/p/7d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1999,
      originalPrice: 4999,
      discount: 60,
      sold: 45,
      total: 80
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      image: "https://static-01.daraz.pk/p/9e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1499,
      originalPrice: 3499,
      discount: 57,
      sold: 67,
      total: 100
    },
    {
      id: 5,
      name: "Women's Handbag",
      image: "https://static-01.daraz.pk/p/2d8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 899,
      originalPrice: 2499,
      discount: 64,
      sold: 38,
      total: 50
    },
    {
      id: 6,
      name: "Gaming Mouse RGB",
      image: "https://static-01.daraz.pk/p/3e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 1299,
      originalPrice: 2999,
      discount: 57,
      sold: 72,
      total: 100
    }
  ];

  // Calculate remaining time for flash sale (3 hours from now)
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 3);
  
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-daraz-orange mr-4">Flash Sale</h2>
          <div className="flex space-x-1">
            <div className="bg-daraz-darkgray text-white rounded px-2 py-1 text-sm">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-daraz-darkgray">:</span>
            <div className="bg-daraz-darkgray text-white rounded px-2 py-1 text-sm">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-daraz-darkgray">:</span>
            <div className="bg-daraz-darkgray text-white rounded px-2 py-1 text-sm">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>
        <Link to="/flash-sale" className="text-daraz-orange text-sm hover:underline">
          SHOP MORE
        </Link>
      </div>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {flashSaleProducts.map(product => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} flashSale={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSale;