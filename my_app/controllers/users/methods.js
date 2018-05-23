import { Users } from "../../models/testSchema";
import { resolve } from "dns";
import { rejects } from "assert";

class UserMethod {
    create = async (user) => {
        console.log('use data', user)
        return await Users.create(user);
    }

    delete = async (userID) => {
        return await Users.deleteOne(userID);

   }

    update = async (data) => {
        console.log('result----------->', data.upUserID);
       return await Users.findOneAndUpdate({ "_id": data.upUserID },
            { $set: { "name": data.name } });
   }

   read = async (uID) => {
       return await Users.read(uID.user_ID)
   }
}
export default UserMethod;



