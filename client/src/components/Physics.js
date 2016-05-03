var Component = require( './Component'),
	World = require( '../World' ),
	Vec2 = require( '../util/Vector2f' )
;

class Physics extends Component {

	constructor( options ) {

		super();

		options = options || {};

		this.weight = options.weight || 20;
		this.velocity = new Vec2( 0, 0 );
		this.maxVelocity = new Vec2( .1, .1 );
		this.desiredVelocity = new Vec2( 0, 0 );
		this.steering = new Vec2( 0, 0 );
		this.slowingRadius = options.slowingRadius || 75;

		World.get( 'physics' ).add( this );
	}

	get name() {

		return 'physics';
	}
}

module.exports = Physics;