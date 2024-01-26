import express from "express";
import * as authController from '../controllers/auth.controller.js';

export const router = express.Router();

router.get('/:id', authController.initUser);
router.patch('/login', authController.login);
router.post('/register', authController.register);
router.delete('/:id', authController.remove);
router.patch('/:id', authController.update);
