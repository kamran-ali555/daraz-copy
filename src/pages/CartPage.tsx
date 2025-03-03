import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ChevronRight } from 'lucide-react';

const CartPage: React.FC = () => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smartphone 6GB RAM 128GB Storage",
      image: "https://static-01.daraz.pk/p/66ec675d545eeabf8eb153d7c9a9f926.jpg",
      price: 29999,
      originalPrice: 39999,
      discount: 25,
      quantity: 1,
      stock: 10
    },
    {
      id: 2,
      name: "Wireless Bluetooth Headphones",
      image: "https://static-01.daraz.pk/p/b02e165334f197a7b5d86e59d9be9f63.jpg",
      price: 2499,
      originalPrice: 4999,
      discount: 50,
      quantity: 2,
      stock: 5
    }
  ]);
  
  const [couponCode, setCouponCode] = useState('');
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.min(newQuantity, item.stock) } 
          : item
      )
    );
  };
  
  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };
  
  const applyCoupon = () => {
    // In a real app, this would validate the coupon with an API
    alert(`Coupon ${couponCode} applied!`);
  };
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 150 : 0; // Free shipping over a certain amount could be implemented
  const discount = 0; // This would be calculated based on applied coupons
  const total = subtotal + shipping - discount;

  return (
    <div className="bg-daraz-lightgray min-h-screen pb-8">
      <div className="container-custom py-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-daraz-gray mb-4">
          <Link to="/" className="hover:text-daraz-orange">Home</Link>
          <ChevronRight size={14} className="mx-1" />
          <span className="text-daraz-darkgray">Shopping Cart</span>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded shadow mb-4">
              <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-medium">Shopping Cart ({cartItems.length} items)</h1>
              </div>
              
              {cartItems.length > 0 ? (
                <div>
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 border-b border-gray-200">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 mb-4 md:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-32 object-contain"
                          />
                        </div>
                        
                        <div className="md:w-3/4 md:pl-4">
                          <div className="flex flex-col md:flex-row justify-between">
                            <div>
                              <Link to={`/product/${item.id}`} className="text-lg hover:text-daraz-orange transition-colors">
                                {item.name}
                              </Link>
                              
                              <div className="flex items-baseline mt-2">
                                <span className="text-daraz-orange font-bold">Rs. {item.price.toLocaleString()}</span>
                                {item.originalPrice && (
                                  <>
                                    <span className="text-daraz-gray text-sm line-through ml-2">
                                      Rs. {item.originalPrice.toLocaleString()}
                                    </span>
                                    <span className="text-daraz-orange text-sm ml-2">-{item.discount}%</span>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center mt-4 md:mt-0">
                              <div className="flex items-center border border-gray-300 rounded">
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="px-2 py-1"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus size={16} className={item.quantity <= 1 ? 'text-gray-300' : ''} />
                                </button>
                                <input 
                                  type="number" 
                                  value={item.quantity}
                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                  className="w-12 text-center border-l border-r border-gray-300 py-1"
                                  min="1"
                                  max={item.stock}
                                />
                                <button 
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="px-2 py-1"
                                  disabled={item.quantity >= item.stock}
                                >
                                  <Plus size={16} className={item.quantity >= item.stock ? 'text-gray-300' : ''} />
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => handleRemoveItem(item.id)}
                                className="ml-4 text-daraz-gray hover:text-daraz-orange transition-colors"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                          
                          <div className="mt-2 text-sm text-daraz-gray">
                            <span>In Stock: {item.stock}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-lg text-daraz-gray mb-4">Your shopping cart is empty</p>
                  <Link to="/" className="btn-orange">
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
            
            {/* Recently Viewed */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-medium mb-4">Recently Viewed</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map(id => (
                  <Link key={id} to={`/product/${id}`} className="product-card block">
                    <div className="p-2">
                      <img 
                        src={`https://static-01.daraz.pk/p/${id === 1 ? '66ec675d545eeabf8eb153d7c9a9f926' : id === 2 ? 'b02e165334f197a7b5d86e59d9be9f63' : id === 3 ? '5b7f1c4b0a8c4c7a5d9c07f9a7d3d8b2' : '9e8f1c4b0a8c4c7a5d9c07f9a7d3d8b2'}.jpg`} 
                        alt={`Product ${id}`} 
                        className="w-full h-24 object-contain"
                      />
                      <h3 className="text-sm mt-2 line-clamp-2">Product {id} with a longer name to test truncation</h3>
                      <p className="text-daraz-orange font-bold text-sm mt-1">Rs. {(1999 * id).toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded shadow p-4 mb-4">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-daraz-gray">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-daraz-gray">Shipping Fee</span>
                  <span>Rs. {shipping.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-daraz-orange">
                    <span>Discount</span>
                    <span>- Rs. {discount.toLocaleString()}</span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-daraz-orange">Rs. {total.toLocaleString()}</span>
                </div>
              </div>
              
              <button className="w-full bg-daraz-orange text-white py-3 rounded hover:opacity-90 transition-opacity mb-4">
                Proceed to Checkout
              </button>
              
              <div className="text-center text-sm text-daraz-gray">
                <p>Prices and shipping costs are not confirmed until you've reached checkout.</p>
              </div>
            </div>
            
            {/* Coupon */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-lg font-medium mb-4">Apply Coupon</h2>
              
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Enter coupon code" 
                  value={couponCode}
                  onChange={handleCouponChange}
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none focus:border-daraz-orange"
                />
                <button 
                  onClick={applyCoupon}
                  className="bg-daraz-orange text-white px-4 py-2 rounded-r hover:opacity-90 transition-opacity"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;