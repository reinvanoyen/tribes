var Component = require( './Component'),
	Vec2 = require( '../util/Vector2f' )
;

class Positionable extends Component {

	onAttach( e ) {

		this.position = new Vec2( 0, 0 );
	}

	onDetach( e ) {

		console.log( 'detached moveable' );
	}

	toString() {

		return 'moveable';
	}

	update( delta ) {

		this.entity.sprite.position.x = this.position.x;
		this.entity.sprite.position.y = this.position.y;
	}
}

module.exports = Positionable;