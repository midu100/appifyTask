import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import { authServices } from '../api';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({email:'',password:''});
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
     if(!formData.email) return toast.error('Enter a valid email');
     if(!formData.password) return toast.error('Enter password');
    // Regex for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await authServices.login({ email: formData.email, password: formData.password });
      
      setLoading(false);
      toast.success(res.message || "Login successful!");
      navigate('/feed');
    } catch (error) {
      
      setLoading(false);
      const errorMsg = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMsg);
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      {/* Left Pane - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-950 relative overflow-hidden flex-col justify-center px-12 xl:px-24">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full filter blur-[100px]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-white">
          <div className="inline-flex items-center space-x-2 text-2xl font-black tracking-tighter mb-16">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <ShieldCheck size={24} className="text-white" />
            </div>
            <span>Connect<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Hub</span></span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Welcome back to <br/> your universe.
          </h1>
          <p className="text-lg text-slate-400 max-w-md">
            Log in to pick up where you left off. Engage with your network and explore what's happening around you today.
          </p>
        </div>
      </div>

      {/* Right Pane - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 xl:px-24 relative">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-8 left-6 sm:left-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
               Connect<span className="text-indigo-600">Hub</span>
            </Link>
        </div>
        
        <div className="w-full max-w-md mx-auto">
          <div className="mb-10 text-center lg:text-left mt-16 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Sign in manually</h2>
            <p className="text-slate-500">
              Don't have an account?{' '}
              <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 transition border-b border-indigo-600/30 pb-0.5">
                Create one now
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-shadow shadow-sm"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>setFormData((p)=>({...p, email : e.target.value}))}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-shadow shadow-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData((p)=>({...p, password : e.target.value}))}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/20 transition-all disabled:opacity-70 group"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Logging in...
                </div>
              ) : (
                <>
                  Sign In to Dashboard
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
