import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MallSection: React.FC = () => {
  const brands = [
    {
      id: 1,
      name: "Samsung",
      logo: "https://static-01.daraz.pk/other/shop/7a3f1f861d5e4a6cbe814f3a9d8e0d23.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/7a3f1f861d5e4a6cbe814f3a9d8e0d23.jpeg",
      url: "/shop/samsung"
    },
    {
      id: 2,
      name: "Xiaomi",
      logo: "https://static-01.daraz.pk/other/shop/8b6f55aa9f754f638f3d7e9f4d7d3a56.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/8b6f55aa9f754f638f3d7e9f4d7d3a56.jpeg",
      url: "/shop/xiaomi"
    },
    {
      id: 3,
      name: "L'Oreal Paris",
      logo: "https://static-01.daraz.pk/other/shop/1c65b25e0e964b9b9d5c7f85b7a4b475.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/1c65b25e0e964b9b9d5c7f85b7a4b475.jpeg",
      url: "/shop/loreal"
    },
    {
      id: 4,
      name: "Adidas",
      logo: "https://static-01.daraz.pk/other/shop/5c5c5e4a2f8b4eaba4eb24a339f2f4bd.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/5c5c5e4a2f8b4eaba4eb24a339f2f4bd.jpeg",
      url: "/shop/adidas"
    },
    {
      id: 5,
      name: "Nestle",
      logo: "https://static-01.daraz.pk/other/shop/a1a3c4c0e2b54f769b5c9d5b13155bf1.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/a1a3c4c0e2b54f769b5c9d5b13155bf1.jpeg",
      url: "/shop/nestle"
    },
    {
      id: 6,
      name: "Unilever",
      logo: "https://static-01.daraz.pk/other/shop/b6c3c4c0e2b54f769b5c9d5b13155bf1.jpeg",
      banner: "https://static-01.daraz.pk/other/shop/b6c3c4c0e2b54f769b5c9d5b13155bf1.jpeg",
      url: "/shop/unilever"
    }
  ];

  return (
    <div className="bg-white rounded shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daraz Mall</h2>
        <Link to="/daraz-mall" className="text-daraz-orange text-sm hover:underline">
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
        {brands.map(brand => (
          <SwiperSlide key={brand.id}>
            <Link to={brand.url} className="block">
              <div className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-24 overflow-hidden">
                  <img 
                    src={brand.banner} 
                    alt={brand.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 flex items-center justify-center">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-12 h-12 object-contain"
                  />
                  <span className="ml-2 text-sm font-medium">{brand.name}</span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MallSection;