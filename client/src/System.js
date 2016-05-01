"use strict";

class System {

	constructor( entity, components ) {

		this.entity = entity;
		this.components = components || [];
	}

	add( c ) {

		c.onAttach();
		this.components.push( c );
	}

	remove( c ) {

		this.components.forEach( function ( cc ) {

			if( c.toString() == cc.toString() ) {

				// @TODO remove component
			}
		} );
	}

	update() {

		this.components.forEach( function ( c ) {

			c.update();
		} );
	}
}

module.exports = System;