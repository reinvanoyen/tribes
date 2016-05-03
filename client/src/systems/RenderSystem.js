var System = require( './System' ),
	PIXI = require( 'pixi.js'),
	$ = require( 'jquery' ),
	rand = require( '../util/rand' ),
	Outline = require( '../rendering/filters/Outline' ),
	Lightmap = require( '../rendering/filters/Lightmap' )
;
//
class RenderSystem extends System {

	constructor() {

		super();

		this.renderer = new PIXI.WebGLRenderer( 800, 600 );
		this.renderer.backgroundColor = 0x0A042C;
		this.stage = new PIXI.Container();

		this.stage.filters = [ new Outline( 800, 600, 5, 0xF14000 ) ) ];

		$( 'body' ).append( $( this.renderer.view ) );
	}

	onNewComponent( c ) {

		this.stage.addChild( c.disc );
	}

	update( delta ) {

		this.components.forEach( c => {

			if( c.entity.hasComponent( 'position' ) ) {

				c.disc.x = c.entity.getComponent( 'position' ).position.x;
				c.disc.y = c.entity.getComponent( 'position' ).position.y;
			}
		} );

		this.renderer.render( this.stage );
	}

	get name() {
		return 'rendering';
	}
}

module.exports = RenderSystem;