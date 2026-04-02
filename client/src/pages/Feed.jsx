import React, { useState, useEffect } from 'react';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { postServices } from '../api';
import { toast } from 'react-toastify';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await postServices.getAllPosts();
        // ব্যাকএন্ড থেকে আসা ডেটার structure { posts: [...] }
        setPosts(data.posts || []);
        setLoading(false);
      } catch (error) {
        const errorMsg = error.response?.data?.message || "Failed to load posts";
        toast.error(errorMsg);
        setPosts([]);
        setLoading(false);
      }
    })();
  }, []);

  const handlePostCreate = async (newPostData) => {
    try {
      // ব্যাকএন্ডে পোস্ট ক্রিয়েট করার API কল 
      // since createPost accepts FormData (if there is an image), newPostData should be FormData or simple object
      const res = await postServices.createPost(newPostData);
      
      // Update state with newly created post from backend
      if (res.post) {
        setPosts([res.post, ...posts]);
        toast.success(res.message || "Post created successfully");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Error creating post";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <CreatePost onPostCreate={handlePostCreate} />
      
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No posts yet. Be the first to post!
          </div>
        ) : (
          posts.map(post => (
            <Post key={post._id || post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
