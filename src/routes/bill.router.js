import express from "express";
import * as billController from '../controllers/bill.controller.js';

export const router = express.Router();

router.get('/:id', billController.getOne);
router.delete('/:id', billController.remove);
router.post('/', billController.create);
router.patch('/:id', billController.update);