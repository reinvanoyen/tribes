var Component = require( './Component'),
	MainSystem = require( '../MainSystem'),
	PIXI = require( 'pixi.js' )
;

class Appearance extends Component {

	constructor( radius ) {

		super();

		this.radius = radius;

		this.disc = new PIXI.Graphics();
		this.disc.lineStyle( 2, 0xcccccc );
		this.disc.drawCircle( 0, 0, radius );
		this.disc.endFill();

		MainSystem.get( 'render_system' ).add( this );
	}

	toString() {

		return 'appearance';
	}
}

module.exports = Appearance;