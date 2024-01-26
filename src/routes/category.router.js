import express from "express";
import * as categoryController from '../controllers/category.controller.js';

export const router = express.Router();

router.get('/:userId', categoryController.getAll);
router.get('/category/:id', categoryController.getOne);
router.delete('/:id', categoryController.remove);
router.post('/:userId', categoryController.create);
router.patch('/:id', categoryController.update);
