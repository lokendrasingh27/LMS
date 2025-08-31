// src/forum/ForumDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { forumTopics } from './forumData';

const ForumDetail = () => {
  const { id } = useParams();
  const topic = forumTopics.find((t) => t.id === id);

  if (!topic) return <p className="text-center mt-10">Topic not found</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
      <Link to="/forum" className="text-sm text-[#0A5F6F] mb-4 inline-block">← Back to Topics</Link>
      <h2 className="text-2xl font-bold text-[#00173D] mb-4">{topic.title}</h2>
      <div className="space-y-4">
        {topic.posts.map((post) => (
          <div key={post.id} className="bg-[#0A5F6F] border border-[#C2E8F8] p-3 rounded">
            <div className="text-sm text-gray-500">
              {post.author} • {post.time}
            </div>
            <p className="text-[#00173D] mt-1">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumDetail;
