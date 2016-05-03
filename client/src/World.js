"use strict";

var World = {

	init: function( gameloop ) {

		this.gameloop = gameloop;
		this.systems = [];
		this.store = {};
		return this;
	},
	add: function( system ) {

		this.store[ system.name ] = system;
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

module.exports = World;