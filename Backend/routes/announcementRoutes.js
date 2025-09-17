// backend/routes/announcementRoutes.js
import express from 'express';
const router = express.Router();

// In-memory announcements (replace with DB later)
let announcements = [
  { id: 1, title: 'System Maintenance', content: 'Scheduled maintenance on Sunday at 2 AM.' },
  { id: 2, title: 'New Feature', content: 'Dark mode will be released next week!' },
];

// GET all announcements
router.get('/', (req, res) => {
  res.json(announcements);
});

// POST a new announcement
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }
  const newAnnouncement = {
    id: announcements.length ? announcements[announcements.length - 1].id + 1 : 1,
    title,
    content,
  };
  announcements.unshift(newAnnouncement);
  res.status(201).json(newAnnouncement);
});

export default router;
