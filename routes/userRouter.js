
//External Module
const express = require('express');
const userRouter = express.Router();

//Local Module
const {profileAdded} = require("../controllers/user");


userRouter.post("/main-content", profileAdded);




exports.userRouter = userRouter;
