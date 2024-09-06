// models/adminUserModel.js
const pool = require('../config/db');

module.exports = {
  getAllAdminUsers: async () => {
    const [rows] = await pool.query('SELECT * FROM admin_users');
    return rows;
  },
  
  getAdminUserById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM admin_users WHERE id = ?', [id]);
    return rows[0];
  },
  
  createAdminUser: async (userData) => {
    const { username, password, email, role } = userData;
    const result = await pool.query('INSERT INTO admin_users (username, password, email, role) VALUES (?, ?, ?, ?)', 
                                    [username, password, email, role]);
    return result[0].insertId;
  },
  
  updateAdminUser: async (id, userData) => {
    const { username, email, role } = userData;
    await pool.query('UPDATE admin_users SET username = ?, email = ?, role = ? WHERE id = ?', 
                     [username, email, role, id]);
  },
  
  deleteAdminUser: async (id) => {
    await pool.query('DELETE FROM admin_users WHERE id = ?', [id]);
  },
};
