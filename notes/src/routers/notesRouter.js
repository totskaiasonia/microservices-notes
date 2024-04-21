import express from "express";
import * as NotesController from '../controllers/notesController.js';

const router = express.Router();

router.get('/notes', NotesController.get);
router.post('/notes', NotesController.post);
router.patch('/notes/:id', NotesController.put);
router.delete('/notes/:id', NotesController.remove);

export default router;