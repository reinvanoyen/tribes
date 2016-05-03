"use strict";

var PIXI = require( 'pixi.js' ),
	$ = require( 'jquery' ),
	Runtime = require( './Runtime' ),
	Player = require( './entities/Player' )
;

class App {

	constructor() {

		this.client = new Colyseus('ws://localhost:3553');
		this.joinRoom( 'room' );

		this.runtime = new Runtime();

		var that = this;

		PIXI.loader
			.add( 'player', 'assets/player.png' )
			.load( function( loader, resources ) {

				let player = new Player();
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