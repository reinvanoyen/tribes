"use strict";

var proxy = function( c, f ) {

	let args = Array.prototype.slice.call( arguments, 2 );

	return function() {

		return f.apply( c, args.concat( Array.prototype.slice.call( arguments ) ) );
	};
};

module.exports = proxy;