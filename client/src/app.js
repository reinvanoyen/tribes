"use strict";

var PIXI = require( 'pixi.js' ),
	$ = require( 'jquery' ),
	Runtime = require( './Runtime' ),
	Entity = require( './entities/Entity'),
	Appearance = require( './components/Appearance'),
	Position = require( './components/Position'),
	Physics = require( './components/Physics' ),
	Target = require( './components/Target' )
;

class App {

	constructor() {

		this.client = new Colyseus('ws://localhost:3553');
		this.joinRoom( 'room' );
		this.runtime = new Runtime();
		this.ready();
	}

	ready() {

		let player = new Entity();
		player.addComponent( new Appearance( 5 ) );
		player.addComponent( new Position( 50, 10 ) );

		let player2 = new Entity();
		player2.addComponent( new Appearance( 10 ) );
		player2.addComponent( new Position( 600, 200 ) );

		let player3 = new Entity();
		player3.addComponent( new Appearance( 20 ) );
		player3.addComponent( new Position( 300, 250 ) );
		player3.addComponent( new Target( 300, 500 ) );
		player3.addComponent( new Physics( 10 ) );
	}

	joinRoom( roomName ) {

		this.room = this.client.join( roomName );

		this.room.on( 'join', function() {

			console.log( this.client.id, 'joined', roomName );
		} );
	}
}

new App();