const express = require("express");
const usrCtlr = require("./controllers/user.js");
//const crsCtlr = require("./controllers/course.js");
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
/* 
// route for the collection of all courses
router.route("/courses")
  .get(crsCtlr.listCourses)
  .post(crsCtlr.createCourse);

// route for an individual course resource
router.route("/courses/:id")
  .get(crsCtlr.readCourse)
  .put(crsCtlr.updateCourse)
  .delete(crsCtlr.deleteCourse); */

module.exports = router; // needed in order to make sure that app.js can load the router object
