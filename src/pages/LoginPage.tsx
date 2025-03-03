import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would authenticate with an API
    console.log('Login attempt with:', { email, password, rememberMe });
    alert('Login successful!');
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-daraz-lightgray min-h-screen py-8">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded shadow p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Welcome to Daraz! Please Login</h1>
            <p className="text-daraz-gray mt-2">New member? <Link to="/register" className="text-daraz-orange hover:underline">Register</Link> here.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-daraz-darkgray mb-2">Email or Phone Number</label>
              <input 
                type="text" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                placeholder="Please enter your Email or Phone"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-daraz-darkgray mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                  placeholder="Please enter your password"
                  required
                />
                <button 
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-daraz-gray"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="mr-2"
                />
                <label htmlFor="remember" className="text-sm text-daraz-gray">Remember me</label>
              </div>
              
              <Link to="/forgot-password" className="text-sm text-daraz-orange hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-daraz-orange text-white py-3 rounded hover:opacity-90 transition-opacity"
            >
              LOGIN
            </button>
          </form>
          
          <div className="mt-6">
            <p className="text-center text-daraz-gray mb-4">Or, login with</p>
            
            <div className="flex justify-center space-x-4">
              <button className="flex-1 border border-gray-300 rounded py-2 text-center hover:bg-gray-50 transition-colors">
                Facebook
              </button>
              <button className="flex-1 border border-gray-300 rounded py-2 text-center hover:bg-gray-50 transition-colors">
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;