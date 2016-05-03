var System = require( './System' ),
	MainSystem = require( '../MainSystem'),
	PIXI = require( 'pixi.js'),
	$ = require( 'jquery' )
;

class RenderSystem extends System {

	constructor() {

		super();

		this.renderer = new PIXI.WebGLRenderer( 800, 600 );
		this.stage = new PIXI.Container();

		$( 'body' ).append( $( this.renderer.view ) );
	}

	onNewComponent( c ) {

		this.stage.addChild( c.sprite );
	}

	update( delta ) {

		this.components.forEach( function( c ) {

			console.log( 'render at loc' );
		} );

		this.renderer.render( this.stage );
	}
}

module.exports = RenderSystem;