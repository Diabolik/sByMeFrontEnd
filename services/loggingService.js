/*
 * *******************************************************************************
 *  Copyright 2015 Mercury Solutions.
 * *******************************************************************************
 */

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'sByMe API Caller', stream: process.stdout,level: 'info',src:true});

module.exports = log;