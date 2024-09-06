const adminUserModel = require('../models/adminUserModel');

module.exports = {
  getAllAdminUsers: async (req, res) => {
    try {
      const users = await adminUserModel.getAllAdminUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve admin users' });
    }
  },
  
  getAdminUserById: async (req, res) => {
    try {
      const user = await adminUserModel.getAdminUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'Admin user not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve admin user' });
    }
  },
  
  createAdminUser: async (req, res) => {
    try {
      const userId = await adminUserModel.createAdminUser(req.body);
      res.status(201).json({ message: 'Admin user created', userId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create admin user' });
    }
  },
  
  updateAdminUser: async (req, res) => {
    try {
      await adminUserModel.updateAdminUser(req.params.id, req.body);
      res.status(200).json({ message: 'Admin user updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update admin user' });
    }
  },
  
  deleteAdminUser: async (req, res) => {
    try {
      await adminUserModel.deleteAdminUser(req.params.id);
      res.status(200).json({ message: 'Admin user deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete admin user' });
    }
  },
};
