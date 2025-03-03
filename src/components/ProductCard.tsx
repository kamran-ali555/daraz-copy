import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  sold?: number;
  total?: number;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  flashSale?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, flashSale = false }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card block h-full">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 object-contain"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-daraz-orange text-white text-xs px-1 py-0.5 rounded">
            -{product.discount}%
          </div>
        )}
      </div>
      
      <div className="p-3">
        <h3 className="text-sm line-clamp-2 mb-2 h-10">{product.name}</h3>
        
        <div className="flex items-baseline">
          <span className="text-daraz-orange font-bold">Rs. {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-daraz-gray text-xs line-through ml-2">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {flashSale && product.sold && product.total && (
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-daraz-orange h-1.5 rounded-full" 
                style={{ width: `${(product.sold / product.total) * 100}%` }}
              ></div>
            </div>
            <div className="text-xs text-daraz-orange mt-1">
              {product.sold} SOLD
            </div>
          </div>
        )}
        
        {product.rating && (
          <div className="flex items-center mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-daraz-gray ml-1">{product.rating}</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;