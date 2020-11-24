const Loc = require("../models/location.js");

// Read the collection of all locations on the server
exports.listLocations = async (req, res) => {
    let options = {
        attributes: ["id", "name"],
        where: {}
    };

    // Filtering the results to only include a subset of all Locations
    if (req.query.name) // api/locations?name=Jungle
        options.where.name = req.query.name;

    let matchingLocations = await Loc.findAll(options); // "SELECT (attribs) FROM Location WHERE (criteria);"

    //  if (req.query.minCredits)
    //    matchingLocations = matchingLocations.filter( s => s.creditsEarned >= req.query.minCredits );
    //
    //  if (req.query.minGPA)
    //    matchingLocations = Usr.Locations.filter( s => s.GPA >= req.query.minGPA );

    res.send(matchingLocations);
};

// Create a new location resource on the server
exports.createLocation = async (req, res) => {
    if (!req.body) // request must contain data
        return res.status(400).send("Missing location data");
    if (!req.body.name) // request data must contain name attribute
        return res.status(400).send("Must specify the location name");
    if (await Loc.findOne({ where: { name: req.body.name } }) == undefined) {//Location name must be unique
        const u = await Loc.create(req.body); // pass the entire JSON object to the model constructor
        res.status(201).send("/locations/" + u.name); // send appropriate response back
    } else {
        res.status(500).send("Location name is already in use.")
    }
};

// Read a location resource from the server
exports.readLocation = async (req, res) => {
    if (!req.params.name) // request must provide a name parameter
        return res.status(400).send("Missing location name");

    const u = await Loc.findOne({ where: { name: req.params.name } });
    if (u === undefined || u == null)  // did we fail to find a matching Location?
        return res.status(404).send("Location name " + req.params.name + " not found");

    if (req.params.prop) { // did client provide a property (i.e. subresource) name
        if (u[req.params.prop] === undefined) // check if the value associated with prop is defined
            return res.status(404).send("Property " + req.params.prop + " does not exist on model Location");
        return res.send("" + u[req.params.prop]);
    }

    return res.send(u); // implicitly stringified into JSON by Express, status 200 by default
};

// Update a location resource
exports.updateLocation = async (req, res) => {
    if (!req.params.name) // request must provide a name parameter
        return res.status(400).send("Missing location name");

    if (!req.body) // request must contain data
        return res.status(400).send("Missing location data");

    const u = await Loc.findOne({ where: { name: req.params.name } });
    if (u === undefined || u == null)  // did we fail to find a matching location?
        return res.status(404).send("Location name " + req.params.name + " not found");

    // update as a subresource
    if (req.params.prop) {
        if (u[req.params.prop] === undefined)
            return res.status(404).send("Property " + req.params.prop + " does not exist on model Location");
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

// Delete a location resource
exports.deleteLocation = async (req, res) => {
    if (!req.params.name) // request must provide a name parameter
        return res.status(400).send("Missing location name");

    const u = await Loc.findOne({ where: { name: req.params.name } });
    if (u === undefined || u == null)  // did we fail to find a matching Location?
        return res.status(404).send("Location name " + req.params.name + " not found");

    try {
        await u.destroy();
        return res.sendStatus(204);
    } catch (exc) {
        return res.status(500).send(exc);
    }
};
