import express from "express";
import * as recordController from '../controllers/record.controller.js';

export const router = express.Router();

router.get('/:userId', recordController.getAll);
router.get('/record/:id', recordController.getOne);
router.delete('/:id', recordController.remove);
router.post('/', recordController.create);
router.patch('/:id', recordController.update);
