var Component = require( './Component'),
	MainSystem = require( '../MainSystem'),
	Vec2 = require( '../util/Vector2f' )
;

class Physics extends Component {

	constructor( weight ) {

		super();

		this.weight = weight;
		this.velocity = new Vec2( 0, 0 );
		this.maxVelocity = new Vec2( 1, 1 );
		this.desiredVelocity = new Vec2( 0, 0 );
		this.steering = new Vec2( 0, 0 );
		this.slowingRadius = 200;

		MainSystem.get( 'physics_system' ).add( this );
	}

	toString() {

		return 'physics';
	}
}

module.exports = Physics;