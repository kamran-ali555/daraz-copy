import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner: React.FC = () => {
  const banners = [
    {
      id: 1,
      image: 'https://icms-image.slatic.net/images/ims-web/a1b6c2f0-61aa-4946-8b0a-5c697f864cfc.jpg',
      alt: 'Flash Sale',
      url: '#'
    },
    {
      id: 2,
      image: 'https://icms-image.slatic.net/images/ims-web/7dc7a0a5-9f26-4c31-ac8d-3f9db2c52d30.jpg',
      alt: 'Mega Deals',
      url: '#'
    },
    {
      id: 3,
      image: 'https://icms-image.slatic.net/images/ims-web/6ad98d3a-09f0-4d58-9f2a-8c1b8f6a9ee6.jpg',
      alt: 'New Arrivals',
      url: '#'
    },
    {
      id: 4,
      image: 'https://icms-image.slatic.net/images/ims-web/9e2a5bbb-6d61-47a4-b396-5f6ed56ca591.jpg',
      alt: 'Fashion Sale',
      url: '#'
    }
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="banner-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <a href={banner.url}>
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="w-full h-auto md:h-[400px] object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;