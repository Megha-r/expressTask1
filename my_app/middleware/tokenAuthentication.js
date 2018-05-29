import jwt from 'jsonwebtoken';
import app from "../server.js"
import Users from "../models/testSchema"
let roleOfUser
export function allUsers (req, res, next) {
	let token = req.body.token || req.query.token || req.headers['x-access-token'];

	// decode token
	if (token) {

		jwt.verify(token, app.get('mySecret'), function (err, decoded) {
			console.log("~~~~~~~~~~~~~~~~~~~~~~~~",token);
			console.log(decoded);
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });
			}
			else {
                req.decoded = decoded;
                console.log("***************************", decoded.id);
                if (decoded.id) {
                    Users.findOne({ _id: decoded.id }, function (err, document) {
                        if (err) {
                            return res.json({ success: false, message: 'Failed to find user.' });
                        }
                        else {
							if(document == null)
							return res.json({ success: false, message: 'Failed to find user.' });
							else
							 roleOfUser = document.role;
							
                            if ((roleOfUser === "admin" && req.method === 'GET') || (roleOfUser === "user" && req.method === 'PUT'))
                                next()
                            else
                                return res.json({ success: false, message: 'Access not granted' });

                        }
                    })
                }
                else
                    return res.status(403).send({
                        success: false,
                        message: 'Not authorised'
                    })
            }
		})

	}

	else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});

	}
}
export function getUsers(req, res) {


    Users.find(function (err, resp) {
        if (err)
            res.status(err).send(err);
        res.status(200).json(resp);
    })

}
