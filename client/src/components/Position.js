var Component = require( './Component'),
	MainSystem = require( '../MainSystem' ),
	Vec2 = require( '../util/Vector2f' )
;

class Position extends Component {

	constructor( x, y ) {

		super();

		this.position = new Vec2( x, y );
	}

	toString() {

		return 'position';
	}
}

module.exports = Position;