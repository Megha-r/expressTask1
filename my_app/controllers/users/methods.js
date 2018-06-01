import Users from "../../models/testSchema";
import { resolve } from "dns";
import { rejects } from "assert";
import { logger } from "../../logger";


class UserMethod {
    create = async (user) => {
        try{
        console.log('use data', user)
        return await Users.create(user);
        }
        catch(err)
        {
            logger.error("Err-----", err);
        }
    };

    delete = async (userID) => {
        try{
        return await Users.deleteOne(userID);
        }
        catch(err)
        {
            logger.error("Err-----", err);
        }

    };

    update = async (data) => {
        try{
        return await Users.findOneAndUpdate({ "_id": data.upUserID },
            { $set: { "name": data.name } });
        }
        catch(err){
            logger.error("Err-----", err);
        }
    };

    read = async (data) => {
        try {
            logger.info("----------------->", data, data._id);
            const response = await Users.findOne({ "_id": data._id});
            return response;
        }
        catch (err) {
            logger.error("Err-----", err);
        }

    };
}
export default UserMethod;



