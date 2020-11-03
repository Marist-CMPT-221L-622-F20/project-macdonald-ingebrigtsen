const Loc = require("../models/area.js");

// Read the collection of all areas on the server
exports.listAreas = (req, res) => {
    res.send(Loc.areas);
};

// Create a new area resource on the server
exports.createArea = (req, res) => {
    if (!req.body) // request must contain data
        return res.status(400).send("Missing area data");
    if (!req.body.location) // request data must contain location attribute
        return res.status(400).send("Must specify the area location");
    if (!req.body.sublocation) // request data must contain sublocation attribute
        return res.status(400).send("Must specify the area sublocation");

    const a = new Loc.Area(req.body.location, req.body.sublocation); // create a new area instance
    if (req.body.description !== undefined) //Skips properties that don't exist
            a.description = req.body.description;
    Loc.areas.push(a); // insert the new area into collection
    res.status(201).send("/areas/" + a.ID); // send appropriate response back
};

// Read a area resource from the server
exports.readArea = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing area ID");

    const a = Loc.areas[req.params.id];
    if (a)  // did we find a matching area?
        res.send(a);
    else  // requested area does not exist
        res.status(404).send("Area ID " + req.params.id + " not found");
};

// Update a area resource
exports.updateArea = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing area ID");

    if (!req.body) // request must contain data
        return res.status(400).send("Missing area data");

    const a = Loc.areas[req.params.id];
    if (!a)  // did we find a matching area?
        return res.status(404).send("Area ID " + req.params.id + " not found"); // requested area does not exist

    for (prop in req.body) {
        if (a[prop] !== undefined) //Skips properties that don't exist
            a[prop] = req.body[prop];
    }

    res.sendStatus(204);
};

// Delete a area resource
exports.deleteArea = (req, res) => {
    if (!req.params.id) // request must provide an id parameter
        return res.status(400).send("Missing area ID");

    const a = Loc.areas[req.params.id];
    if (!a)  // did we find a matching area?
        return res.status(404).send("Area ID " + req.params.id + " not found"); // requested area does not exist

    delete Loc.areas[req.params.id];
    res.sendStatus(204);
};
