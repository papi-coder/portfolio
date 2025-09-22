
// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Database file will be created in project root
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'));

// Create posts table if it doesn’t exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      image TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
