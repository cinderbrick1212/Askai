

//External Module
const express = require('express');
const guestRouter = express.Router();

//Local Module
const {about} = require("../controllers/guest");
const {homePage} = require("../controllers/guest");
const {getForm} = require("../controllers/guest");
const {subjects} = require("../controllers/guest");
const {privacy} = require("../controllers/guest");
const {dashboard} = require("../controllers/guest");

guestRouter.get("/", homePage);

guestRouter.get("/about",about);

guestRouter.get("/preference", getForm);

guestRouter.get("/topics/:topicName", subjects);

guestRouter.get("/privacy-policy", privacy);

guestRouter.get("/student-dashboard", dashboard);

module.exports = guestRouter;

