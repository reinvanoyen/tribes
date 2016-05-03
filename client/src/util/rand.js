"use strict";

var rand = {};

rand.between = function( min, max ) {
	
	return Math.floor( Math.random() * max ) + min;
};

module.exports = rand;