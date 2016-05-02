var Component = require( './Component'),
	Vec2 = require( '../util/Vector2f' )
;

class Rotatable extends Component {

	onAttach( e ) {

		this.direction = new Vec2( 0, 1 );
	}

	onDetach( e ) {

		console.log( 'detached rotate' );
	}

	toString() {

		return 'rotate';
	}
	
	update( delta ) {

		this.entity.sprite.rotation += 0.01 * delta;
	}
}

module.exports = Rotatable;