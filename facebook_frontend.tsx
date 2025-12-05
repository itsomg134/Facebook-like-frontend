import React, { useState } from 'react';
import { Home, Users, Video, Store, Bell, MessageCircle, Search, Plus, ThumbsUp, MessageSquare, Share2, MoreHorizontal } from 'lucide-react';

export default function FacebookFrontend() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=1',
      time: '2h',
      content: 'Just finished an amazing hike! The view from the top was absolutely worth it. 🏔️',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      likes: 127,
      comments: 23,
      shares: 5
    },
    {
      id: 2,
      author: 'Mike Chen',
      avatar: 'https://i.pravatar.cc/150?img=12',
      time: '5h',
      content: 'Excited to announce that I\'m starting a new position as Senior Developer at TechCorp! Looking forward to this new chapter.',
      likes: 234,
      comments: 45,
      shares: 12
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=5',
      time: '1d',
      content: 'Homemade pizza night! 🍕 Recipe in the comments.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
      likes: 89,
      comments: 15,
      shares: 3
    }
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: 'https://i.pravatar.cc/150?img=33',
        time: 'Just now',
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                f
              </div>
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search Facebook"
                  className="bg-transparent border-none outline-none ml-2 w-48"
                />
              </div>
            </div>

            {/* Center */}
            <nav className="hidden md:flex space-x-2">
              <button className="px-8 py-2 text-blue-600 border-b-2 border-blue-600 hover:bg-gray-100 rounded-lg">
                <Home className="w-6 h-6" />
              </button>
              <button className="px-8 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Users className="w-6 h-6" />
              </button>
              <button className="px-8 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Video className="w-6 h-6" />
              </button>
              <button className="px-8 py-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Store className="w-6 h-6" />
              </button>
            </nav>

            {/* Right */}
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <Plus className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <MessageCircle className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                <Bell className="w-5 h-5" />
              </button>
              <img
                src="https://i.pravatar.cc/150?img=33"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto pt-20 px-4">
        {/* Create Post */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex items-center space-x-3 mb-3">
            <img
              src="https://i.pravatar.cc/150?img=33"
              alt="Your avatar"
              className="w-10 h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none hover:bg-gray-200"
            />
          </div>
          <div className="border-t pt-3 flex justify-between">
            <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
              <Video className="w-5 h-5 text-red-500" />
              <span className="text-sm font-medium">Live video</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
              <Search className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium">Photo/video</span>
            </button>
            {newPost.trim() && (
              <button
                onClick={handlePostSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-2"
              >
                Post
              </button>
            )}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-sm">{post.author}</h3>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Post Content */}
              <div className="px-4 pb-3">
                <p className="text-sm">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt="Post content"
                  className="w-full object-cover"
                />
              )}

              {/* Post Stats */}
              <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 border-b">
                <span>{post.likes} likes</span>
                <div className="flex space-x-2">
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="px-4 py-1 flex justify-between">
                <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Like</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm font-medium">Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg flex-1 justify-center">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}