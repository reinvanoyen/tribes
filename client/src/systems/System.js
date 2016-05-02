"use strict";

class System {

	constructor() {

		this.components = [];
	}

	add( c ) {

		this.onNewComponent( c );
		this.components.push( c );
	}

	remove( c ) {

		let i = this.components.indexOf( c );

		if( i > -1 ) {

			this.components.splice( i, 1 );
		}
	}

	update( delta ) {}
	onNewComponent( c ) {}
}

module.exports = System;