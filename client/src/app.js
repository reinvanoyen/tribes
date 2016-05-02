"use strict";

var PIXI = require( 'pixi.js' ),
	$ = require( 'jquery' ),
	Renderer = require( './Renderer' ),
	Player = require( './entities/Player' )
;

class App {

	constructor() {

		this.client = new Colyseus('ws://localhost:3553');
		this.joinRoom( 'room' );

		this.renderer = new Renderer();
		this.renderer.build();

		var that = this;
		PIXI.loader.add( 'player', 'assets/player.png' ).load( function( loader, resources ) {

			that.renderer.addEntity( new Player( resources.player.texture ) );
		} );
	}

	joinRoom( roomName ) {

		this.room = this.client.join( roomName );

		this.room.on( 'join', function() {

			console.log( this.client.id, 'joined', roomName );
		} );
	}
}

new App();