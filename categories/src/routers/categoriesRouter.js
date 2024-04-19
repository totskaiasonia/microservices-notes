import express from "express";
import * as CategoriesController from '../controllers/categoriesController.js';

const router = express.Router();

router.get('/categories', CategoriesController.get);
router.post('/categories', CategoriesController.post);
router.put('/categories/:id', CategoriesController.put);
router.delete('/categories/:id', CategoriesController.remove);

export default router;