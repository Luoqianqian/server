import pool from '../config/db.js';

export default {
  getAllUsers: async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  },
  
  getUserById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
  
  createUser: async (userData) => {
    const { username, phone, password } = userData;
    const result = await pool.query('INSERT INTO users (username, phone, password) VALUES (?, ?, ?)', [username, phone, password]);
    return result[0].insertId;
  },
  
  updateUser: async (id, userData) => {
    const { username, email } = userData;
    await pool.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
  },
  
  deleteUser: async (id) => {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  },
};