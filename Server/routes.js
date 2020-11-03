const express = require("express");
const usrCtlr = require("./controllers/user.js");
const locCtlr = require("./controllers/area.js");
const router = express.Router();

// route for the collection of all users
router.route("/users")
  .get(usrCtlr.listUsers)
  .post(usrCtlr.createUser);

// route for an individual user resource
router.route("/users/:id")
  .get(usrCtlr.readUser)
  .put(usrCtlr.updateUser)
  .delete(usrCtlr.deleteUser);

// route for the collection of all areas
router.route("/areas")
  .get(locCtlr.listAreas)
  .post(locCtlr.createArea);

// route for an individual area resource
router.route("/areas/:id")
  .get(locCtlr.readArea)
  .put(locCtlr.updateArea)
  .delete(locCtlr.deleteArea);

module.exports = router; // needed in order to make sure that app.js can load the router object
