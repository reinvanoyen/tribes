var Component = require( './Component' ),
	MainSystem = require( '../MainSystem' ),
	Vec2 = require( '../util/Vector2f' )
;

class Target extends Component {

	constructor( x, y ) {

		super();

		this.position = new Vec2( x, y );
	}

	toString() {

		return 'target';
	}
}

module.exports = Target;