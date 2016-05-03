var Component = require( './Component'),
	Vec2 = require( '../util/Vector2f' )
;

class Position extends Component {

	constructor( x, y ) {

		super();

		this.position = new Vec2( x, y );
	}

	get name() {

		return 'position';
	}
}

module.exports = Position;