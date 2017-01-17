/*
 * *******************************************************************************
 *  Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

var log = require("./loggingService");
var errorService = require("./errorService");
var request = require('request');

exports.userLogin = function (user, onSuccess, onFailure) {
    var dataString = user;
    var headers = { 'Content-Type': 'application/json' }; 

    var options = {
        headers: headers,
        json: dataString
    };

    request.post(buildUserLoginURL(), options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            onSuccess(body);
        }else{
            onFailure(errorService.buildError(error));
        }
    })
}

exports.saveUser = function(user, onSuccess, onFailure){
    var dataString = user;
    var headers = { 'Content-Type': 'application/json' };

    var options = {
        headers: headers,
        json: dataString
    };

    request.post(buildSaveUserURL(), options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            onSuccess(body);
        }else{
            onFailure(errorService.buildError(error));
        }
    })

    function buildUserLoginURL() {
        var serviceHost = process.env.ETR_SERVICE_ART_HOST_URL || 'http://localhost';
        var requestResourcePath = process.env.ETR_SERVICE_REQ_SVC_RESOURCE_REQUESTS || '/api/users/login';
        var servicePort = process.env.ETR_SERVICE_ART_PORT || '3100';
        var url = serviceHost + ":" + servicePort + requestResourcePath;

        log.info("Build save request URL: " + url);
        return url;
    }

    function buildSaveUserURL() {
        var serviceHost = process.env.ETR_SERVICE_ART_HOST_URL || 'http://localhost';
        var requestResourcePath = process.env.ETR_SERVICE_REQ_SVC_RESOURCE_REQUESTS || '/api/users/';
        var servicePort = process.env.ETR_SERVICE_ART_PORT || '3100';
        var url = serviceHost + ":" + servicePort + requestResourcePath;

        log.info("Build save request URL: " + url);
        return url;
    }
}