const userModel = require('../models/userModel');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  },
  
  getUserById: async (req, res) => {
    try {
      const user = await userModel.getUserById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },
  
  createUser: async (req, res) => {
    try {
      const userId = await userModel.createUser(req.body);
      res.status(201).json({ message: 'User created', userId });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },
  
  updateUser: async (req, res) => {
    try {
      await userModel.updateUser(req.params.id, req.body);
      res.status(200).json({ message: 'User updated' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },
  
  deleteUser: async (req, res) => {
    try {
      await userModel.deleteUser(req.params.id);
      res.status(200).json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },
};