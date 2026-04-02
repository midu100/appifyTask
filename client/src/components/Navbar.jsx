import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Leaf size={24} />
            </div>
            <Link to="/feed" className="text-xl font-bold text-gray-900 tracking-tight">ConnectHub</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-gray-600">
              <User size={20} />
              <span className="font-medium text-sm">Welcome</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-1 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
