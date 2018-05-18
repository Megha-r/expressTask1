import { Router } from "express";
import { createUser ,deleteUser, updateUser } from './controllers/users/userData';
//import { deleteUser } from "./controllers/users/deleteUser";
import { autheticationFunc } from "./middleware/auth";
import { allUsers } from "./controllers/fetchUser/allUsers";
//import { updateUser } from "./controllers/users/updateUser";
import { singleUser } from "./controllers/fetchUser/singleUser";
import app from "./server.js"

const router = new Router();
router.route('/post_users').post(createUser);
router.route('/post_users').delete(deleteUser);
router.route('/authenticate').post(autheticationFunc);
router.route('/users').get(allUsers);
router.route('/users/:users_id').put(updateUser);
router.route('/users/:user_id').get(singleUser);
//app.use('/api', routes);
export default router;
