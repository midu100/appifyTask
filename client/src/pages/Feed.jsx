import React, { useState, useEffect } from 'react';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';

// Dummy initial data
const INITIAL_POSTS = [
  {
    id: 1,
    author: { name: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?u=alice' },
    content: 'Just launched my new portfolio website! Super excited to share it with everyone. 🚀✨',
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 mins ago
    isPrivate: false,
    likes: ['user1', 'user2'],
    comments: [{ id: 1, text: 'Looks great!' }]
  },
  {
    id: 2,
    author: { name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?u=bob' },
    content: 'Learning React and Tailwind CSS today. The utility-first approach is really a game changer! #webdev',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    isPrivate: false,
    likes: ['user3'],
    comments: []
  }
];

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call fetching posts from the backend
    setPosts(INITIAL_POSTS);
  }, []);

  const handlePostCreate = (newPost) => {
    // Prepend new post to show newest first
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <CreatePost onPostCreate={handlePostCreate} />
      
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No posts yet. Be the first to post!
          </div>
        ) : (
          posts.map(post => (
            <Post key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Feed;
