import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Globe, Lock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="card mb-6 transition-shadow hover:shadow-md">
      {/* Post Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex space-x-3 items-center">
          <img 
            src={post.author?.avatar || `https://ui-avatars.com/api/?name=${post.author?.fristName || 'A'}+${post.author?.lastName || ''}`} 
            alt={post.author?.fristName || 'User'} 
            className="w-12 h-12 rounded-full object-cover border border-gray-100"
          />
          <div>
            <h4 className="font-semibold text-gray-900">{post.author ? `${post.author.fristName || ''} ${post.author.lastName || ''}`.trim() : 'Anonymous'}</h4>
            <div className="flex items-center text-xs text-gray-500 space-x-1">
              <span>{formatDistanceToNow(new Date(post.createdAt || Date.now()))} ago</span>
              <span>•</span>
              {post.isPrivate ? <Lock size={12} /> : <Globe size={12} />}
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4 text-gray-800 whitespace-pre-wrap">
        {post.content}
        {post.image && (
          <img 
            src={post.image} 
            alt="Post content" 
            className="mt-4 rounded-xl w-full max-h-96 object-cover border border-gray-100"
          />
        )}
      </div>

      {/* Post Stats */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-3 text-sm text-gray-500">
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
            <Heart size={12} fill="currentColor" />
          </div>
          <span>{likesCount} likes</span>
        </div>
        <div className="flex space-x-3">
          <span className="cursor-pointer hover:underline">{post.comments?.length || 0} comments</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex border-b border-gray-100 pb-2 mb-4">
        <button 
          onClick={handleLike}
          className={`flex-1 flex justify-center items-center space-x-2 py-2 rounded-lg transition-colors font-medium text-sm
            ${liked ? 'text-primary' : 'text-gray-600 hover:bg-gray-50'}`}
        >
          <Heart size={20} fill={liked ? 'currentColor' : 'none'} className={liked ? 'scale-110 transition-transform' : ''} />
          <span>Like</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex-1 flex justify-center items-center space-x-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm"
        >
          <MessageCircle size={20} />
          <span>Comment</span>
        </button>
        <button className="flex-1 flex justify-center items-center space-x-2 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors font-medium text-sm">
          <Share2 size={20} />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="flex space-x-3 mt-4">
          <img 
            src="https://i.pravatar.cc/150?u=current" 
            alt="Current User" 
            className="w-8 h-8 rounded-full border border-gray-100 mt-1 object-cover"
          />
          <div className="flex-1 flex flex-col bg-gray-50 rounded-2xl px-4 py-2 border border-gray-100">
            <input 
              type="text" 
              placeholder="Write a comment..." 
              className="bg-transparent focus:outline-none text-sm py-1 w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
