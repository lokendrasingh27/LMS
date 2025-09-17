import React, { useState, useEffect } from 'react';

const Communications = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch announcements on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/announcements')
      .then(res => res.json())
      .then(data => {
        setAnnouncements(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch announcements:', err);
        setLoading(false);
      });
  }, []);

  const handleAddAnnouncement = async (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    try {
      const response = await fetch('http://localhost:5000/api/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      if (!response.ok) {
        throw new Error('Failed to add announcement');
      }

      const newAnnouncement = await response.json();
      setAnnouncements([newAnnouncement, ...announcements]);
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error(error);
      alert('Error adding announcement. Please try again.');
    }
  };

  if (loading) return <p>Loading announcements...</p>;

  return (
    <div className="p-8 mx-auto">
      <h1 className="text-3xl font-bold mb-4">Communications</h1>
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
