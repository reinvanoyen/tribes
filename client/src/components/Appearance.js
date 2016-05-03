var Component = require( './Component'),
	World = require( '../World'),
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

		World.get( 'rendering' ).add( this );
	}

	get name() {

		return 'appearance';
	}
}

module.exports = Appearance;