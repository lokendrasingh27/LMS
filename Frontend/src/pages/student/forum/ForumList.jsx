// src/forum/ForumList.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { forumTopics } from './forumData';

const ForumList = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-[#0A5F6F] mb-4">Discussion Topics</h2>
      <ul className="space-y-4">
        {forumTopics.map((topic) => (
          <li key={topic.id} className="p-4 border border-[#0A5F6F] rounded hover:bg-[#F0FBFF]">
            <Link to={`/forum/${topic.id}`} className="text-[#00173D] font-medium text-lg">
              {topic.title}
            </Link>
            <p className="text-sm text-[#0A5F6F]">
              By {topic.createdBy} on {topic.createdAt}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;
