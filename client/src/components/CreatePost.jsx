import React, { useState, useRef } from 'react';
import { Image, Video, Paperclip, Send, X } from 'lucide-react';

const CreatePost = ({ onPostCreate }) => {
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim() && !image) return;
    
    setLoading(true);
    
    const formData = new FormData();
    formData.append('content', content);
    formData.append('visibility', isPrivate ? 'private' : 'public');
    if (image) {
      formData.append('image', image);
    }

    await onPostCreate(formData);
    setContent('');
    setImage(null);
    setIsPrivate(false);
    setLoading(false);
  };

  return (
    <div className="card mb-6">
      <div className="flex space-x-4">
        <img 
          src="https://i.pravatar.cc/150?u=current" 
          alt="User Avatar" 
          className="w-12 h-12 rounded-full border-2 border-gray-100 object-cover"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary resize-none placeholder-gray-400"
            rows="3"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          {image && (
            <div className="relative mt-3 inline-block">
              <img 
                src={URL.createObjectURL(image)} 
                alt="Upload Preview" 
                className="h-32 rounded-lg object-cover border border-gray-200"
              />
              <button 
                type="button" 
                onClick={() => setImage(null)}
                className="absolute -top-2 -right-2 bg-gray-900 text-white p-1 rounded-full hover:bg-gray-700"
              >
                <X size={14} />
              </button>
            </div>
          )}
          
          <div className="flex border-t border-gray-100 mt-3 pt-3 justify-between items-center">
            <div className="flex space-x-2">
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                className="hidden" 
              />
              <button type="button" onClick={() => fileInputRef.current.click()} className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <Image size={20} />
              </button>
              <button type="button" className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors hidden sm:block">
                <Video size={20} />
              </button>
              <button type="button" className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors">
                <Paperclip size={20} />
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600 font-medium cursor-pointer">Private</label>
                <button 
                  type="button" 
                  onClick={() => setIsPrivate(!isPrivate)}
                  className={`w-10 h-5 rounded-full relative transition-colors ${isPrivate ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${isPrivate ? 'transform translate-x-5' : ''}`}></span>
                </button>
              </div>
              <button 
                type="submit" 
                disabled={loading || !content.trim()}
                className="flex items-center space-x-2 bg-primary text-white px-5 py-2 rounded-full font-medium shadow-sm hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span>Post</span>
                <Send size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
