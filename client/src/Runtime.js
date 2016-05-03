var proxy = require( './util/proxy' ),
	Clock = require( 'clock-timer.js' ),
	MainSystem = require( './MainSystem' ),
	RenderSystem = require( './systems/RenderSystem' )
;

class Runtime {

	constructor() {

		this.clock = new Clock();

		MainSystem.init( this );
		MainSystem.add( 'rendersys', new RenderSystem() );

		this.run();
	}

	run() {

		requestAnimationFrame( proxy( this, this.run ) );

		this.clock.tick();
		MainSystem.update( this.clock.deltaTime );
	}
}

module.exports = Runtime;