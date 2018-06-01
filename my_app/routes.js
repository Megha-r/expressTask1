import { Router } from "express";
import UserController from './controllers/users/controller';
import {autheticationFunc} from "./middleware/token Generation";
import  allUsers  from "./middleware/tokenAuthentication";
//import { updateUser } from "./controllers/users/updateUser";
//import { singleUser } from "./controllers/fetchUser/singleUser";
// import app from "./server.js"


const router = new Router();
router.route('/post_users').post(UserController.createUser);
router.route('/post_users/:user_id').delete(UserController.deleteUser);
router.route('/authenticate').post(autheticationFunc);
router.route('/users').get(allUsers);
router.route('/users/:user_id').put(UserController.updateUser);
router.route('/users/:user_id').get(UserController.getUser);
export default router;
