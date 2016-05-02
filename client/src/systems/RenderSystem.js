var System = require( './System' ),
	MainSystem = require( '../MainSystem' );

class RenderSystem extends System {

	onNewComponent( c ) {

		MainSystem.gameloop.stage.addChild( c.sprite );
	}

	update( delta ) {

		this.components.forEach( function( c ) {

			console.log( 'render at loc' );
		} );
	}
}

module.exports = RenderSystem;