var $ = require( 'jquery' ),
	PIXI = require( 'pixi.js' ),
	proxy = require( './util/proxy' ),
	Clock = require( 'clock-timer.js' )
	;

class Renderer {

	constructor() {

		this.clock = new Clock();

		this.renderer = new PIXI.WebGLRenderer(800, 600);
		this.stage = new PIXI.Container();
		this.entities = [];
	}
	
	build() {

		$( 'body' ).append( $( this.renderer.view ) );

		this.render();
	}

	addEntity( e ) {

		this.entities.push( e );
		this.stage.addChild( e.sprite );
	}
	
	render() {

		requestAnimationFrame( proxy( this, this.render ) );

		this.clock.tick();

		var that = this;

		this.entities.forEach( function( e ) {

			e.update( that.clock.deltaTime );
		} );

		this.renderer.render( this.stage );
	}
}

module.exports = Renderer;