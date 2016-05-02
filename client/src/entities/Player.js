var Entity = require( './Entity' ),
	Rotate = require( '../components/Rotate' );

class Player extends Entity {

	constructor( texture ) {

		super( texture );

		this.rotate = new Rotate();
		this.components.add( this.rotate );
	}
}

module.exports = Player;