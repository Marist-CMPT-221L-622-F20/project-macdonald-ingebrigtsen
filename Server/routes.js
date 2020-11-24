const express = require("express");
const usrCtlr = require("./controllers/user.js");
const locCtlr = require("./controllers/location.js");
const champCtlr = require("./controllers/champions.js");
const router = express.Router();

///////////////

// route for the collection of all users
router.route("/users")
  .get(usrCtlr.listUsers)
  .post(usrCtlr.createUser);

// route for an individual user resource
router.route("/users/:name")
  .get(usrCtlr.readUser)
  .put(usrCtlr.updateUser)
  .delete(usrCtlr.deleteUser);

// route for a user and property  
router.route("/users/:name/:prop")
  .get(usrCtlr.readUser)
  .put(usrCtlr.updateUser);

////////////////

// route for the collection of all locations
router.route("/locations")
  .get(locCtlr.listLocations)
  .post(locCtlr.createLocation);

// route for an individual location resource
router.route("/locations/:name")
  .get(locCtlr.readLocation)
  .put(locCtlr.updateLocation)
  .delete(locCtlr.deleteLocation);

// route for a location and property  
router.route("/locations/:name/:prop")
  .get(locCtlr.readLocation)
  .put(locCtlr.updateLocation);

//////////////

// route for the collection of all champions
router.route("/champions")
  .get(champCtlr.listChampions)
  .post(champCtlr.createChampion);

// route for an individual champion resource
router.route("/champions/:ChampName")
  .get(champCtlr.readChampion)
  .put(champCtlr.updateChampion)
  .delete(champCtlr.deleteChampion);

module.exports = router; // needed in order to make sure that app.js can load the router object
