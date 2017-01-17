/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */
var express = require('express');
var router = express.Router();
var userAPIController = require("../controllers/userAPIController");

//User API Calls
router.post('/api/users/login/', userAPIController.loginUser);
router.post('/api/users/', userAPIController.save);

module.exports = router;