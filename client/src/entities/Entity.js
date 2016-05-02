"use strict";

var PIXI = require( 'pixi.js' ),
	System = require( '../System' )
;

class Entity {

	constructor( texture ) {

		this.sprite = new PIXI.Sprite( texture );
		this.sprite.position.x = 100;
		this.sprite.position.y = 100;

		this.components = new System( this );
	}

	update( delta ) {

		this.components.update( delta );
	}
}

module.exports = Entity;