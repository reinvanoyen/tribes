"use strict";

var PIXI = require( 'pixi.js' ),
	$ = require( 'jquery' ),
	Runtime = require( './Runtime' )
;

class App {

	constructor() {

		this.client = new Colyseus('ws://localhost:3553');
		this.joinRoom( 'room' );
		this.runtime = new Runtime();
	}

	joinRoom( roomName ) {

		this.room = this.client.join( roomName );

		this.room.on( 'join', function() {

			console.log( this.client.id, 'joined', roomName );
		} );
	}
}

new App();