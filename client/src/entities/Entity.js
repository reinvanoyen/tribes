"use strict";

var PIXI = require( 'pixi.js' ),
	util = require( '../util' ),
	System = require( '../System' );

class Entity {

	constructor( texture ) {

		this.sprite = new PIXI.Sprite( texture );
		this.sprite.position.x = 100;
		this.sprite.position.y = 100;

		this.components = new System( this );
	}

	update() {

		this.components.update();
	}
}

module.exports = Entity;