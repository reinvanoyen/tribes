var System = require( './System' ),
	Vec2 = require( '../util/Vector2f' ),
	$ = require( 'jquery' ),
	Target = require( '../components/Target' )
;

class PlayerControlSystem extends System {

	constructor() {

		super();

		this.targetPosition = new Vec2( 0, 0 );

		$( window ).click( e => {

			this.updateTarget( e.offsetX, e.offsetY );
		} );
	}

	updateTarget( x, y ) {

		this.targetPosition = new Vec2( x, y );
	}

	update( delta ) {

		this.components.forEach( c => {

			if( c.entity.hasComponent( 'target' ) ) {

				c.entity.getComponent( 'target' ).position = this.targetPosition;
			} else {

				c.entity.addComponent( new Target( this.targetPosition.x, this.targetPosition.y ) );
			}
		} );
	}

	get name() {
		return 'playercontrol';
	}
}

module.exports = PlayerControlSystem;