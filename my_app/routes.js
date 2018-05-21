import { Router } from "express";
import UserController from './controllers/users/controller';
//import { deleteUser } from "./controllers/users/deleteUser";
import { autheticationFunc } from "./middleware/auth";
import  {getUsers}  from "./controllers/fetchUser/allUsers";
//import { updateUser } from "./controllers/users/updateUser";
//import { singleUser } from "./controllers/fetchUser/singleUser";
import app from "./server.js"


const router = new Router();
router.route('/post_users').post(UserController.createUser);
router.route('/post_users/:user_id').delete(UserController.deleteUser);
router.route('/authenticate').post(autheticationFunc);
router.route('/users').get(getUsers);
router.route('/users/:users_id').put(UserController.updateUser);
router.route('/users/:user_id').get(UserController.getUser);
//console.log(router);
export default router;
