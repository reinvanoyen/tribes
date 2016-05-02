"use strict";

class Entity {

	constructor() {
		
		this.components = [];
	}

	addComponent( c ) {

		this.components.push( c );
	}
}

module.exports = Entity;