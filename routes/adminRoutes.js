const express = require('express');
const adminUserController = require('../controllers/adminUserController');
const router = express.Router();

router.get('/', adminUserController.getAllAdminUsers);
router.get('/:id', adminUserController.getAdminUserById);
router.post('/', adminUserController.createAdminUser);
router.put('/:id', adminUserController.updateAdminUser);
router.delete('/:id', adminUserController.deleteAdminUser);

module.exports = router;
