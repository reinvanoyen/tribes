var Entity = require( './Entity' ),
	Rotatable = require( '../components/Rotatable' ),
	Positionable = require( '../components/Positionable' )
;

class Player extends Entity {

	constructor( texture ) {

		super( texture );

		this.rotatable = new Rotatable();
		this.positionable = new Positionable();

		this.components.add( this.rotatable );
		this.components.add( this.positionable );
	}
}

module.exports = Player;