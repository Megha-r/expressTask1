import Users from '../../models/testSchema';
import UserMethod from './methods';
import logger from '../../logger.js';

class UserController extends UserMethod {
    createUser = async (req,res) => {
        try {
            console.log('body', req.body);
            const { username, email, name, password, admin, role } =  req.body;
            const users = { username,
                            email,
                            name, 
                            password,
                            admin,
                            role,
                        
            };
            console.log("CREATE USER-------->",users);
            const response = await this.create(users);
            res.status(200).json({ message:"Unique id of user created by mongo", response });
            //TODO handle success response
        } catch(err) {
            res.status(500).send(err);
            //TODO handle error response
        }
        
    }

    deleteUser = async (req,res) => {
        try {
            
            const userID  = req.params.users_id
            const response = await this.delete(userID);
           res.status(200).json({ message: "User deleted", response });
            //TODO handle success response
        } catch(err) {
            res.status(500).send(err);
            //TODO handle error response
        }
        
    }


   updateUser = async (req,res) => { 
       try{
          const upUserID = req.params.user_id;
          const name = req.body.name;
          const data = { upUserID,name,};
            console.log(data);
          const response = await this.update(data);
          res.status(200).json({message: "Upadted user", response});
                 
        }
       catch(err){
        res.status(500).send(err);
        //TODO handle error response
       }
   }

   getUser = async (req,res) =>{
       try{
              console.log("----------I am in getUser function-----");
              const user_ID = req.params.user_id;
              const data = {
                  _id: user_ID
              }
              const respon = await this.read(data);
              console.log("Response is ++++>",respon);
              res.status(200).json({message:"User Data", respon})
       }
       catch(err){
        res.status(500).send(err);
 
       }
   }

}

export default new UserController();
