var Entity = require( './Entity' ),
	Rotate = require( '../components/Rotate' );

class Player extends Entity {

	constructor( texture ) {

		super( texture );

		this.components.add( new Rotate( this ) );
	}
}

module.exports = Player;