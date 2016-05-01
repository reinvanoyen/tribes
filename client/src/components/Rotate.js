var Component = require( './Component' );

class Rotate extends Component {

	toString() {

		return 'rotate';
	}
	
	update() {

		this.entity.sprite.rotation += 0.01;
	}
}

module.exports = Rotate;