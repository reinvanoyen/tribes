var proxy = require( './util/proxy' ),
	rand = require( './util/rand' ),
	Clock = require( 'clock-timer.js' ),
	World = require( './World' ),
	RenderSystem = require( './systems/RenderSystem' ),
	PhysicsSystem = require( './systems/PhysicsSystem' ),
	PlayerControlSystem = require( './systems/PlayerControlSystem' ),
	Entity = require( './entities/Entity'),
	Appearance = require( './components/Appearance'),
	Position = require( './components/Position'),
	Physics = require( './components/Physics' ),
	Target = require( './components/Target' ),
	PlayerControllable = require( './components/PlayerControllable' )
;

class Runtime {

	constructor() {

		this.clock = new Clock();

		World.init( this );
		World.add( new RenderSystem() );
		World.add( new PhysicsSystem() );
		World.add( new PlayerControlSystem() );

		for( let i = 0; i < 1000; i++ )
		{
			let entity = new Entity();
			entity.addComponent( new Appearance( rand.between( 3, 15 ) ) );
			entity.addComponent( new Position( rand.between( 0, 800 ), rand.between( 0, 600 ) ) );
			entity.addComponent( new Physics( {
				weight: rand.between( 1, 30 ),
				slowingRadius: rand.between( 10, 500 )
			} ) );
			entity.addComponent( new PlayerControllable() );
		}

		this.run();
	}

	run() {

		requestAnimationFrame( proxy( this, this.run ) );

		this.clock.tick();
		World.update( this.clock.deltaTime );
	}
}

module.exports = Runtime;