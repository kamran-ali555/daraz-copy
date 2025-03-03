import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingCart, TruckIcon, Shield, Award, Star, ChevronRight } from 'lucide-react';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Mock product data
  const product = {
    id: parseInt(id || '1'),
    name: "Smartphone 6GB RAM 128GB Storage",
    description: "Experience the power of our latest smartphone with 6GB RAM and 128GB storage. Featuring a stunning 6.5-inch AMOLED display, 48MP quad camera setup, and 5000mAh battery for all-day usage.",
    price: 29999,
    originalPrice: 39999,
    discount: 25,
    rating: 4.8,
    reviews: 245,
    sold: 1250,
    brand: "TechBrand",
    sku: "TB-SM-6GB-128GB",
    stock: 50,
    warranty: "1 Year Official Warranty",
    images: [
      "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926-1.jpg",
      "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926-2.jpg",
      "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926-3.jpg"
    ],
    specifications: [
      { name: "Display", value: "6.5-inch AMOLED, 90Hz" },
      { name: "Processor", value: "Octa-core 2.4GHz" },
      { name: "RAM", value: "6GB" },
      { name: "Storage", value: "128GB" },
      { name: "Battery", value: "5000mAh" },
      { name: "Camera", value: "48MP + 8MP + 5MP + 2MP" },
      { name: "Front Camera", value: "16MP" },
      { name: "OS", value: "Android 12" },
      { name: "SIM", value: "Dual SIM (Nano-SIM)" },
      { name: "Connectivity", value: "Wi-Fi, Bluetooth 5.0, GPS" }
    ]
  };
  
  // Related products
  const relatedProducts = [
    {
      id: 107,
      name: "Smartphone 8GB RAM 256GB Storage",
      image: "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      price: 39999,
      originalPrice: 49999,
      discount: 20,
      rating: 4.9
    },
    {
      id: 108,
      name: "Smartphone 4GB RAM 64GB Storage",
      image: "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      price: 19999,
      originalPrice: 24999,
      discount: 20,
      rating: 4.6
    },
    {
      id: 109,
      name: "Wireless Earbuds",
      image: "https://static-01.daraz.pk/p/b02e165334f197a7b5d86e59d9be9f63.jpg",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      rating: 4.5
    },
    {
      id: 110,
      name: "Phone Case",
      image: "https://static-01.daraz.pk/p/9e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2.jpg",
      price: 599,
      originalPrice: 999,
      discount: 40,
      rating: 4.3
    }
  ];

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    console.log(`Added ${quantity} of product ${product.id} to cart`);
    // In a real app, this would dispatch to a cart state manager
    alert(`Added ${quantity} item(s) to your cart!`);
  };

  const buyNow = () => {
    console.log(`Buy now ${quantity} of product ${product.id}`);
    // In a real app, this would add to cart and redirect to checkout
    alert(`Proceeding to checkout with ${quantity} item(s)!`);
  };

  return (
    <div className="bg-daraz-lightgray min-h-screen pb-8">
      <div className="container-custom py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-daraz-gray mb-4">
          <Link to="/" className="hover:text-daraz-orange">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/category/electronics" className="hover:text-daraz-orange">Electronics</Link>
          <ChevronRight size={14} className="mx-1" />
          <Link to="/category/smartphones" className="hover:text-daraz-orange">Smartphones</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-daraz-darkgray truncate max-w-xs">{product.name}</span>
        </div>
        
        {/* Product Details */}
        <div className="bg-white rounded shadow p-4 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="mb-4 border border-gray-200 rounded">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-80 object-contain"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`border ${selectedImage === index ? 'border-daraz-orange' : 'border-gray-200'} rounded cursor-pointer w-16 h-16`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - view ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-xl font-medium mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <span className="text-daraz-orange font-bold mr-1">{product.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <span className="mx-2 text-daraz-gray">|</span>
                <span className="text-daraz-gray">{product.reviews} Ratings</span>
                <span className="mx-2 text-daraz-gray">|</span>
                <span className="text-daraz-gray">{product.sold} Sold</span>
              </div>
              
              <div className="bg-daraz-lightgray p-4 mb-4">
                <div className="flex items-baseline mb-2">
                  <span className="text-daraz-orange text-2xl font-bold">Rs. {product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-daraz-gray text-sm line-through ml-2">
                        Rs. {product.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-daraz-orange text-sm ml-2">-{product.discount}%</span>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-daraz-gray w-24">Brand:</span>
                  <Link to={`/brand/${product.brand.toLowerCase()}`} className="text-daraz-blue hover:text-daraz-orange">
                    {product.brand}
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-daraz-gray w-24">SKU:</span>
                  <span>{product.sku}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-daraz-gray w-24">Warranty:</span>
                  <span>{product.warranty}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <span className="text-daraz-gray w-24">Quantity:</span>
                  <div className="flex items-center">
                    <button 
                      onClick={decreaseQuantity}
                      className="border border-gray-300 px-3 py-1 rounded-l"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="border-t border-b border-gray-300 w-12 py-1 text-center"
                    />
                    <button 
                      onClick={increaseQuantity}
                      className="border border-gray-300 px-3 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <span className="ml-4 text-daraz-gray">{product.stock} available</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mb-6">
                <button 
                  onClick={addToCart}
                  className="flex-1 bg-daraz-orange text-white py-3 rounded hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button 
                  onClick={buyNow}
                  className="flex-1 bg-daraz-orange text-white py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Buy Now
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button className="flex items-center text-daraz-gray hover:text-daraz-orange transition-colors">
                  <Heart size={18} className="mr-1" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Delivery & Services */}
        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="text-lg font-medium mb-4">Delivery & Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start">
              <TruckIcon size={20} className="text-daraz-gray mr-2 mt-1" />
              <div>
                <h3 className="font-medium">Standard Delivery</h3>
                <p className="text-sm text-daraz-gray">2-4 days</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Shield size={20} className="text-daraz-gray mr-2 mt-1" />
              <div>
                <h3 className="font-medium">Warranty</h3>
                <p className="text-sm text-daraz-gray">{product.warranty}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Award size={20} className="text-daraz-gray mr-2 mt-1" />
              <div>
                <h3 className="font-medium">100% Authentic</h3>
                <p className="text-sm text-daraz-gray">Original product guaranteed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="bg-white rounded shadow mb-4">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'description' ? 'text-daraz-orange border-b-2 border-daraz-orange' : 'text-daraz-gray'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'specifications' ? 'text-daraz-orange border-b-2 border-daraz-orange' : 'text-daraz-gray'}`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button 
                className={`px-6 py-3 text-sm font-medium ${activeTab === 'reviews' ? 'text-daraz-orange border-b-2 border-daraz-orange' : 'text-daraz-gray'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>
          
          <div className="p-4">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Product Description</h3>
                <p className="text-daraz-gray">{product.description}</p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Product Specifications</h3>
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-daraz-lightgray' : ''}>
                        <td className="py-2 px-4 font-medium w-1/3">{spec.name}</td>
                        <td className="py-2 px-4 text-daraz-gray">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
                <div className="flex items-center mb-6">
                  <div className="text-center mr-8">
                    <div className="text-4xl font-bold text-daraz-orange">{product.rating}</div>
                    <div className="flex justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-sm text-daraz-gray">{product.reviews} Ratings</div>
                  </div>
                  
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map(star => {
                      // Mock percentage for each star rating
                      const percentage = star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2;
                      return (
                        <div key={star} className="flex items-center mb-1">
                          <div className="flex items-center w-16">
                            <span className="mr-1">{star}</span>
                            <Star size={12} className="text-yellow-400 fill-yellow-400" />
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-daraz-gray w-8">{percentage}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="text-center py-8">
                  <p className="text-daraz-gray mb-4">Be the first to review this product</p>
                  <button className="bg-daraz-orange text-white px-6 py-2 rounded hover:opacity-90 transition-opacity">
                    Write a Review
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-medium mb-4">You May Also Like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map(product => (
              <Link key={product.id} to={`/product/${product.id}`} className="product-card block">
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
                  
                  {product.rating && (
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-daraz-gray ml-1">{product.rating}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;