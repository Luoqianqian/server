import express from 'express';
import adminUserController from '../controllers/adminController.js';
const router = express.Router();

router.get('/', adminUserController.getAllAdminUsers);
router.get('/:id', adminUserController.getAdminUserById);
router.post('/', adminUserController.createAdminUser);
router.put('/:id', adminUserController.updateAdminUser);
router.delete('/:id', adminUserController.deleteAdminUser);

export default router;
