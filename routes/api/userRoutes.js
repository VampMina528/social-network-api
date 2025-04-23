import { Router } from 'express';
import userController from '../../controllers/userController.js';

const router = Router();

router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

router.route('/:userId')
.get(userController.getSingleUser)
.put(userController.updateUser)
.delete(userController.deleteUser);
 

export default router;
