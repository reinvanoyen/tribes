var $ = require( 'jquery' ),
	PIXI = require( 'pixi.js' ),
	proxy = require( './util/proxy' ),
	Clock = require( 'clock-timer.js' ),
	MainSystem = require( './MainSystem' ),
	RenderSystem = require( './systems/RenderSystem' )
;

class GameLoop {

	constructor() {

		this.clock = new Clock();

		this.renderer = new PIXI.WebGLRenderer( 800, 600 );
		this.stage = new PIXI.Container();

		MainSystem.init( this );
		MainSystem.add( 'rendersys', new RenderSystem() );
	}
	
	build() {

		$( 'body' ).append( $( this.renderer.view ) );

		this.render();
	}

	render() {

		requestAnimationFrame( proxy( this, this.render ) );

		this.clock.tick();
		MainSystem.update( this.clock.deltaTime );
		this.renderer.render( this.stage );
	}
}

module.exports = GameLoop;