import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    gender: '',
    birthday: '',
    agreeTerms: false
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // In a real app, this would register with an API
    console.log('Registration data:', formData);
    alert('Registration successful!');
  };
  
  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="bg-daraz-lightgray min-h-screen py-8">
      <div className="container-custom">
        <div className="max-w-md mx-auto bg-white rounded shadow p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create your Daraz Account</h1>
            <p className="text-daraz-gray mt-2">Already member? <Link to="/login" className="text-daraz-orange hover:underline">Login</Link> here.</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-daraz-darkgray mb-2">Phone Number*</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                placeholder="Please enter your phone number"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-daraz-darkgray mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                placeholder="Please enter your email"
              />
              <p className="text-xs text-daraz-gray mt-1">We'll send a verification code to this email.</p>
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-daraz-darkgray mb-2">Password*</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                  placeholder="Minimum 6 characters with letters and numbers"
                  required
                  minLength={6}
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('password')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-daraz-gray"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-daraz-darkgray mb-2">Confirm Password*</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                  placeholder="Confirm your password"
                  required
                />
                <button 
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-daraz-gray"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-daraz-darkgray mb-2">Full Name*</label>
              <input 
                type="text" 
                id="fullName" 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
                placeholder="Please enter your full name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="gender" className="block text-daraz-darkgray mb-2">Gender</label>
              <select 
                id="gender" 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="birthday" className="block text-daraz-darkgray mb-2">Birthday</label>
              <input 
                type="date" 
                id="birthday" 
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-daraz-orange"
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="agreeTerms" 
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-1 mr-2"
                  required
                />
                <label htmlFor="agreeTerms" className="text-sm text-daraz-gray">
                  By clicking "SIGN UP", I agree to Daraz's <Link to="/terms" className="text-daraz-orange hover:underline">Terms of Use</Link> and <Link to="/privacy" className="text-daraz-orange hover:underline">Privacy Policy</Link>.
                </label>
              </div>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-daraz-orange text-white py-3 rounded hover:opacity-90 transition-opacity"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;