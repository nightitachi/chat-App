import express from 'express';
import { getUserForSidebar } from '../controllers/user.controller.js';

const router = express.Router();

// router.get("/" , protectRoute , getUserForSidebar);
router.get("/" , getUserForSidebar);

export default router; 