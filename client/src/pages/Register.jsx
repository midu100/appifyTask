import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, UserPlus, Fingerprint } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('token', 'dummy-jwt-token');
      setLoading(false);
      navigate('/feed');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-slate-50 font-sans">
      {/* Right Pane - Branding (Flipped for Register to add dynamic feel) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden flex-col justify-center px-12 xl:px-24 order-2">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-[20%] left-[-20%] w-[70%] h-[70%] bg-indigo-600/20 rounded-full filter blur-[120px]"></div>
           <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-pink-600/20 rounded-full filter blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-white">
          <div className="inline-flex items-center space-x-2 text-2xl font-black tracking-tighter mb-16">
            <div className="w-10 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center">
              <UserPlus size={24} className="text-white" />
            </div>
            <span>Connect<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Hub</span></span>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Start your <br/> new journey.
          </h1>
          <p className="text-lg text-slate-400 max-w-md">
            Join thousands of professionals and creators. Build your network, share your stories, and discover new opportunities.
          </p>
          
          {/* Mock testimonial / Stat */}
          <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur max-w-sm">
             <div className="flex items-center gap-4 mb-4">
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="user" />
                  ))}
               </div>
               <div className="text-sm">
                 <div className="font-bold">1M+ Users</div>
                 <div className="text-slate-400">Already joined</div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Left Pane - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 xl:px-24 relative order-1">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-8 left-6 sm:left-12">
            <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900">
               Connect<span className="text-pink-600">Hub</span>
            </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-10 text-center lg:text-left mt-16 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Create Account</h2>
            <p className="text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-slate-900 hover:text-slate-700 transition border-b border-slate-900/30 pb-0.5">
                Log in and proceed
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Fingerprint className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-shadow shadow-sm"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Fingerprint className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-shadow shadow-sm"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-shadow shadow-sm"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="password"
                  required
                  minLength="6"
                  className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-shadow shadow-sm"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 ml-1">Must be at least 6 characters long</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full flex justify-center items-center py-3.5 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 focus:outline-none focus:ring-4 focus:ring-pink-500/20 transition-all disabled:opacity-70 group"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Creating account...
                </div>
              ) : (
                <>
                  Complete Registration
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

export default Register;
