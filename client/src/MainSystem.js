"use strict";

var MainSystem = {

	init: function( gameloop ) {

		this.gameloop = gameloop;
		this.systems = [];
		this.store = {};
		return this;
	},
	add: function( k, system ) {

		this.store[ k ] = system;
		system.main = this;
		this.systems.push( system );
	},
	get: function( k ) {

		return this.store[ k ];
	},
	update: function( delta ) {

		this.systems.forEach( function( s ) {

			s.update( delta );
		} );
	}
};

module.exports = MainSystem;