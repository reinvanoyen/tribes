var Component = require( './Component' ),
	World = require( '../World' ),
	Vec2 = require( '../util/Vector2f' )
;

class Target extends Component {

	constructor( x, y ) {

		super();

		this.position = new Vec2( x, y );
	}

	get name() {

		return 'target';
	}
}

module.exports = Target;