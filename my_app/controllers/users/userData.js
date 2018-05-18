export function createUser (req, res) {
    let users = new Users();
    users.username = req.body.username
    users.email = req.body.email
    users.name = req.body.name
    users.password = req.body.password
    users.admin = req.body.admin
    users.role = req.body.role
    console.log("response ", res.body)
    users.save(function (err) {
        if (err)
            res.status(err).send(err);
        res.status(200).json({ message: "Unique id of user created by mongo" });
    });
}


export function updateUser (req, res) {
    findById(req.params.users_id, function (err, resp) {
        if (err)
            res.send(err);
        resp.name = req.body.name;

        resp.save(function (err) {

            if (err)
                res.status(err).send(err);

            res.status(200).json({ message: "Updated" });


        });
    });

}



export  function deleteUser(req, res) {
    remove({
        _id: req.params.users_id
    }, function (err) {
        if (err)
            res.send(err);

        res.status(200).json({ message: 'Successfully deleted' });
    });
}