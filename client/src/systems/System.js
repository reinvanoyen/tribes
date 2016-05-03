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

	get name() {
		throw "System needs to implement name";
	}

	update( delta ) {}
	onNewComponent( c ) {}
}

module.exports = System;