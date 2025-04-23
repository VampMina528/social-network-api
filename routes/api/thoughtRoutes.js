import { Router } from 'express';
import thoughtController from '../../controllers/thoughtControllers.js';
const router = Router();

router.route('/')
.get(thoughtController.getThoughts)
.post(thoughtController.createThought);

router.route('/:thoughtId')
.get(thoughtController.getSingleThought)
.put(thoughtController.updateThought)
.delete(thoughtController.deleteThought);

export default router;
