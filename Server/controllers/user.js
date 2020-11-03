const Usr = require("../models/user.js");

// Read the collection of all users on the server
exports.listUsers = (req, res) => {
    res.send(Usr.users);
};

// Create a new user resource on the server
exports.createUser = (req, res) => {
    if (!req.body) // request must contain data
        return res.status(400).send("Missing user data");
    if (!req.body.name) // request data must contain name attribute
        return res.status(400).send("Must specify the user name");

    const u = new Usr.User(req.body.name); // create a new user instance
    Usr.users.push(u); // insert the new user into collection
    res.status(201).send("/users/" + u.ID); // send appropriate response back
};

// Read a user resource from the server
exports.readUser = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    const u = Usr.users[req.params.id];
    if (u)  // did we find a matching user?
        res.send(u);
    else  // requested user does not exist
        res.status(404).send("User ID " + req.params.id + " not found");
};

// Update a user resource
exports.updateUser = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    if (!req.body) // request must contain data
        return res.status(400).send("Missing user data");

    const u = Usr.users[req.params.id];
    if (!u)  // did we find a matching user?
        return res.status(404).send("User ID " + req.params.id + " not found"); // requested user does not exist

    for (prop in req.body) {
        if (u[prop] !== undefined) //Skips properties that don't exist
            u[prop] = req.body[prop];
    }

    res.sendStatus(204);
};

// Delete a user resource
exports.deleteUser = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    const u = Usr.users[req.params.id];
    if (!u)  // did we find a matching user?
        return res.status(404).send("User ID " + req.params.id + " not found"); // requested user does not exist

    delete Usr.users[req.params.id];
    res.sendStatus(204);
};
