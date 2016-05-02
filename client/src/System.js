"use strict";

class System {

	constructor( entity, components ) {

		this.entity = entity;
		this.components = components || [];
	}

	add( c ) {

		c.attach( this.entity );
		this.components.push( c );
	}

	remove( c ) {

		let i = this.components.indexOf( c );

		if( i > -1 ) {

			c.detach();
			this.components.splice( i, 1 );
		}
	}

	update( delta ) {

		this.components.forEach( function ( c ) {

			c.update( delta );
		} );
	}
}

module.exports = System;