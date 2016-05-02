var Entity = require( './Entity' ),
	Appearance = require( '../components/Appearance' )
;

class Player extends Entity {

	constructor() {

		super();
		
		this.addComponent( new Appearance( 'assets/player.png' ) );
	}
}

module.exports = Player;