import jwt from 'jsonwebtoken';
import app from "../server.js"
import Users from "../models/testSchema"

export function autheticationFunc (req, res) {
    Users.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {

            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                const payload = {
                    id: user._id
                };

                let token = jwt.sign(payload, app.get('mySecret'), {
                    
                });
                res.json({
                    success: true,
                    message: 'Your Secret token!',
                    token: token
                });
            }

        }

    });
}

