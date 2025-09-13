import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import for navigation

const Communications = () => {
  const navigate = useNavigate(); // ✅ Hook to navigate
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'System Maintenance', content: 'Scheduled maintenance on Sunday at 2 AM.' },
    { id: 2, title: 'New Feature', content: 'Dark mode will be released next week!' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newAnnouncement = {
      id: announcements.length + 1,
      title: newTitle,
      content: newContent,
    };

    setAnnouncements([newAnnouncement, ...announcements]);
    setNewTitle('');
    setNewContent('');
  };

  return (
    <div className="p-8  mx-auto">
       <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold mb-4">Communications</h1>
     
        <button
          onClick={() => navigate('/')}
          className="bg-[#006D77] text-white px-4 py-2 rounded hover:bg-[#033b41db] transition"
        >
          ← Back to Dashboard
        </button>
      </div>
       <p className="mb-6">Manage announcements, notifications, and messages here.</p>

      <form onSubmit={handleAddAnnouncement} className="mb-8">
        <input
          type="text"
          placeholder="Announcement Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <textarea
          placeholder="Announcement Content"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#006D77] text-white rounded hover:bg-[#033b41db] transition"
        >
          Add Announcement
        </button>
      </form>

      <ul className="space-y-4">
        {announcements.map(({ id, title, content }) => (
          <li key={id} className="border rounded p-4 shadow">
            <h2 className="font-semibold text-xl">{title}</h2>
            <p className="mt-1">{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Communications;
