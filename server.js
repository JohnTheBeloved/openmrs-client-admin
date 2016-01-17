
var express = require('express');
var ServerUtils = require('./openmrs-client-modules/ServerUtils.js');

var processArgs = ServerUtils.parseArgs(process.argv);
console.log(processArgs)
var openmrsNodeClient = express();

openmrsNodeClient.use(express.static('public'))

openmrsNodeClient.listen(2015);

console.log("Sucessfully started openMRS nodeJS client...");
