var System = require( './System' ),
	Vec2 = require( '../util/Vector2f' )
;

class PhysicsSystem extends System {

	onNewComponent( c ) {}

	update( delta ) {

		this.components.forEach( c => {

			if( c.entity.hasComponent( 'position' ) && c.entity.hasComponent( 'target' ) ) {

				let targetPosition = c.entity.getComponent( 'target' ).position;
				let position = c.entity.getComponent( 'position' ).position;

				c.desiredVelocity = targetPosition.sub( position );

				let dist = c.desiredVelocity.length();

				if( dist < c.slowingRadius ) {

					c.desiredVelocity = c.desiredVelocity.normalize().mul( c.maxVelocity ).mul( dist / c.slowingRadius );
				} else {

					c.desiredVelocity = c.desiredVelocity.normalize().mul( c.maxVelocity );
				}

				c.steering = c.desiredVelocity.sub( c.velocity ).div( c.weight );
				c.velocity = c.velocity.add( c.steering );

				c.entity.getComponent( 'position' ).position = c.entity.getComponent( 'position' ).position.add( c.velocity.mul( delta / 10 ) );
			}
		} );
	}

	get name() {
		return 'physics';
	}
}

module.exports = PhysicsSystem;