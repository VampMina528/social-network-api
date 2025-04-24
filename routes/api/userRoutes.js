import { Router } from 'express';
import userController from '../../controllers/userController.js';

const router = Router();
// localhost:3001/api/users
router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

 // localhost:3001/api/user/10003030491092019401294 
router.route('/:userId')
.get(userController.getSingleUser)
.put(userController.updateUser)
.delete(userController.deleteUser);
 
router.route('/:userId/friends/:friendId')
  .post(userController.addFriend)
  .delete(userController.removeFriend);

export default router;
