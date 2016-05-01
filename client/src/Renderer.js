var $ = require( 'jquery' ),
	PIXI = require( 'pixi.js' ),
	util = require( './util' );

class Renderer {

	constructor() {
		
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

		requestAnimationFrame( util.proxy( this, this.render ) );

		this.entities.forEach( function( e ) {

			e.update();
		} );

		this.renderer.render( this.stage );
	}
}

module.exports = Renderer;