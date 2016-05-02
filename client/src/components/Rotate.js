var Component = require( './Component' );

class Rotate extends Component {

	onAttach( e ) {

		console.log( 'attached rotate' );
	}

	onDetach( e ) {

		console.log( 'detached rotate' );
	}

	toString() {

		return 'rotate';
	}
	
	update( delta ) {

		this.entity.sprite.rotation += 0.01 * delta;
	}
}

module.exports = Rotate;