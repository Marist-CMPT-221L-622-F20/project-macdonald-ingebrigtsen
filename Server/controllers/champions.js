const Champ = require("../models/champions.js");

// Read the collection of all champions on the server
exports.listChampions = (req, res) => {
    res.send(Champ.champions);
};

// Create a new champion resource on the server
exports.createChampion = (req, res) => {
    if (!req.body) // request must contain data
        return res.status(400).send("Missing champion data");
    if (!req.body.ChampName) // request data must contain ChampName attribute
        return res.status(400).send("Must specify the champion ChampName");
    if (!req.body.ArchType) // request data must contain ArchType attribute
        return res.status(400).send("Must specify the Archtype");
    if (!req.body.Difficulty) // request data must contain Difficulty attribute
        return res.status(400).send("Must specify the Difficulty");

    const u = new Champ.Champion(req.body.ChampName, req.body.ArchType, req.body.Difficulty); // create a new champion instance
    Champ.champions.push(u); // insert the new champion into collection
    res.status(201).send("/Champions/" + u.ChampName); // send appropriate response back
};

// Read a champion resource from the server
exports.readChampion = (req, res) => {
    if (!req.params.ChampName) // request must provChampNamee an ChampName parameter
        return res.status(400).send("Missing champion ChampName");

    for (let index = 0; index < Champ.champions.length; index++) {
        let champObject = Champ.champions[index];
        if (champObject) {
            let champName = champObject.ChampName;
            let input = req.params.ChampName;
            if (champName == input)
                var c = champObject;
        }
    }
    if (c)  // did we find a matching champion?
        res.send(c);
    else  // requested champion does not exist
        res.status(404).send("Champion " + req.params.ChampName + " not found");
};

// Update a champion resource
exports.updateChampion = (req, res) => {
    if (!req.params.ChampName) // request must provide ChampName an ChampName parameter
        return res.status(400).send("Missing champion ChampName");
    if (!req.body) // request must contain data
        return res.status(400).send("Missing champion data");

    for (let index = 0; index < Champ.champions.length; index++) {
        let champObject = Champ.champions[index];
        if (champObject) {
            let champName = champObject.ChampName;
            let input = req.params.ChampName;
            if (champName == input)
                var c = champObject;
        }
    }
    if (!c)  // ChampName we find a matching champion?
        return res.status(404).send("Champion ChampName " + req.params.ChampName + " not found"); // requested champion does not exist

    for (prop in req.body) {
        if (c[prop] !== undefined) //Skips properties that don't exist
            c[prop] = req.body[prop];
    }

    // s.ChampName = req.body.ChampName;
    res.sendStatus(204);
};
// Delete a champion resource
exports.deleteChampion = (req, res) => {
    if (!req.params.ChampName) // request must provide a ChampName and a ChampName parameter
        return res.status(400).send("Missing champion ChampName");

    for (let index = 0; index < Champ.champions.length; index++) {
        let champObject = Champ.champions[index];
        if (champObject) {
            let champName = champObject.ChampName;
            let input = req.params.ChampName;
            if (champName == input)
                var i = index;
        }
    }
    if (!i && i !== 0)  // did we find a matching champion?
        return res.status(404).send("Champion ChampName " + req.params.ChampName + " not found"); // requested champion does not exist
    delete Champ.champions[i];

    res.sendStatus(204);
}; 