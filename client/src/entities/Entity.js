"use strict";

class Entity {

	constructor() {
		
		this.components = {};
	}

	addComponent( c ) {

		c.attach( this );
		this.components[ c.name ] = c;
	}

	hasComponent( k ) {

		return ( typeof this.components[ k ] !== 'undefined' );
	}

	getComponent( k ) {

		return this.components[ k ];
	}
}

module.exports = Entity;