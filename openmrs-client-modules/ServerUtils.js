
'use strict';

function parseCommandLineArguments(commandLineArguments){
	var parsedArguments = {global:{},angular:{},node:{},grunt:{}};

	commandLineArguments.forEach(function(argument, index,array){

		var argumentTypes = {global: "-G",angular: "-A",node: "-N", grunt: "-GT"}

		for(var argumentType in argumentTypes){
			var argumentTypePrefix = argumentTypes[argumentType]

			if(argument.slice(0, argumentTypePrefix.length) == argumentTypePrefix){
				var argumentValue = argument.slice(argumentTypePrefix.length, argument.length).split("=")
				parsedArguments[argumentType][argumentValue[0]] = argumentValue[1];
			}else{
				parsedArguments['global'][index] = argument;
			}
		}
		
	});

	return parsedArguments;

}

exports = module.exports.parseArgs = parseCommandLineArguments;