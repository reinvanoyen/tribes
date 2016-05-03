var Component = require( './Component'),
	World = require( '../World'),
	PIXI = require( 'pixi.js' );

class PlayerControllable extends Component {

	constructor() {

		super();

		World.get( 'playercontrol' ).add( this );
	}

	get name() {

		return 'playercontrollable';
	}
}

module.exports = PlayerControllable;