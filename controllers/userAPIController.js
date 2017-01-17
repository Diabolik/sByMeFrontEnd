/*
 * *******************************************************************************
 *   Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

 var log = require("../services/loggingService");
 var userService = require('../services/userAPIService');

 exports.save = function(req,res) {
    var agreement = req.body
    var response = userService.saveUser(user, function(externalAPIresponse){
            res.status(200).send("Save Success");
        },
        function(externalAPIresponse){
            log.info("Got a error back from the save call");
            res.status(400).send(externalAPIresponse);
        }
    )
}

exports.loginUser = function(req,res) {
    var agreement = req.body
    var response = userService.userLogin(user, function(externalAPIresponse){
            res.status(200).send("Save Success");
        },
        function(externalAPIresponse){
            log.info("Got a error back from the save call");
            res.status(400).send(externalAPIresponse);
        }
    )
}