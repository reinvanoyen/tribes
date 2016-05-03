var proxy = require( './util/proxy' ),
	Clock = require( 'clock-timer.js' ),
	MainSystem = require( './MainSystem' ),
	RenderSystem = require( './systems/RenderSystem' ),
	PhysicsSystem = require( './systems/PhysicsSystem' )
;

class Runtime {

	constructor() {

		this.clock = new Clock();

		MainSystem.init( this );
		MainSystem.add( 'render_system', new RenderSystem() );
		MainSystem.add( 'physics_system', new PhysicsSystem() );

		this.run();
	}

	run() {

		requestAnimationFrame( proxy( this, this.run ) );

		this.clock.tick();
		MainSystem.update( this.clock.deltaTime );
	}
}

module.exports = Runtime;