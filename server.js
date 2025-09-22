
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const POSTS_FILE = path.join(__dirname, 'posts.json');

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Helper to read/write posts safely
function readPosts() {
  try {
    const raw = fs.readFileSync(POSTS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function writePosts(posts) {
  fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2), 'utf8');
}

// API routes
app.get('/api/posts', (req, res) => {
  res.json(readPosts());
});

app.post('/api/posts', (req, res) => {
  const { title, content, image } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'title and content required' });

  const posts = readPosts();
  const newPost = {
    id: Date.now(),
    title,
    content,
    image: image || null,
    createdAt: new Date().toISOString()
  };
  posts.unshift(newPost); // newest first
  writePosts(posts);
  res.json({ ok: true, post: newPost });
});

// fallback to index for SPA-like behaviour if needed
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', req.path);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

app.listen(PORT, () => {
  console.log(`Papi Portfolio running at http://localhost:${PORT}`);
});
