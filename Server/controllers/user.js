const Usr = require("../models/user.js");

// Read the collection of all users on the server
exports.listUsers = async (req, res) => {
    let options = {
        attributes: ["id", "name", "currentLocation"],
        where: {}
    };

    // Filtering the results to only include a subset of all Users
    if (req.query.name) // api/users?name=Bob
        options.where.name = req.query.name;

    let matchingUsers = await Usr.findAll(options); // "SELECT (attribs) FROM User WHERE (criteria);"

    //  if (req.query.minCredits)
    //    matchingUsers = matchingUsers.filter( s => s.creditsEarned >= req.query.minCredits );
    //
    //  if (req.query.minGPA)
    //    matchingUsers = Usr.Users.filter( s => s.GPA >= req.query.minGPA );

    res.send(matchingUsers);
};

// Create a new user resource on the server
exports.createUser = async (req, res) => {
    if (!req.body) // request must contain data
        return res.status(400).send("Missing user data");
    if (!req.body.name) // request data must contain name attribute
        return res.status(400).send("Must specify the user name");
    if (await Usr.findOne({ where: { name: req.body.name } }) == undefined) {//Username must be unique
        const u = await Usr.create(req.body); // pass the entire JSON object to the model constructor
        res.status(201).send("/users/" + u.id); // send appropriate response back
    } else {
        res.status(500).send("User name is already in use.")
    }
};

// Read a user resource from the server
exports.readUser = async (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    const u = await Usr.findById(req.params.id);
    if (u === undefined || u == null)  // did we fail to find a matching User?
        return res.status(404).send("User ID " + req.params.id + " not found");

    if (req.params.prop) { // did client provide a property (i.e. subresource) name
        if (u[req.params.prop] === undefined) // check if the value associated with prop is defined
            return res.status(404).send("Property " + req.params.prop + " does not exist on model User");
        return res.send("" + u[req.params.prop]);
    }

    return res.send(u); // implicitly stringified into JSON by Express, status 200 by default
};

// Update a user resource
exports.updateUser = async (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    if (!req.body) // request must contain data
        return res.status(400).send("Missing user data");

    const u = await Usr.findById(req.params.id);
    if (u === undefined)  // did we fail to find a matching user?
        return res.status(404).send("User ID " + req.params.id + " not found");

    // update as a subresource
    if (req.params.prop) {
        if (u[req.params.prop] === undefined)
            return res.status(404).send("Property " + req.params.prop + " does not exist on model User");
        u[req.params.prop] = req.body.prop; // the RHS depends on how we pack the data in the request object
        //TODO: above, how to set it equal to just req.body   ?
        await u.save();
    } else { // update from set of instructions as JSON 
        for (prop in req.body) {
            if (u[prop] !== undefined) // skips any non-existent or undefined properties of s
                u[prop] = req.body[prop];
        }
        await u.save();
    }

    res.sendStatus(204);
};

// Delete a user resource
exports.deleteUser = async (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing user ID");

    const u = await Usr.findById(req.params.id);
    if (u === undefined || u == null)  // did we fail to find a matching User?
        return res.status(404).send("Student ID " + req.params.id + " not found");

    try {
        await u.destroy();
        return res.sendStatus(204);
    } catch (exc) {
        return res.status(500).send(exc);
    }
};
