"use strict";

var PIXI = require( 'pixi.js' ),
	$ = require( 'jquery' ),
	GameLoop = require( './GameLoop' ),
	Player = require( './entities/Player' )
;

class App {

	constructor() {

		this.client = new Colyseus('ws://localhost:3553');
		this.joinRoom( 'room' );

		this.gameloop = new GameLoop();
		this.gameloop.build();

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