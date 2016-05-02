var Component = require( './Component'),
	MainSystem = require( '../MainSystem' ),
	PIXI = require( 'pixi.js' );

class Appearance extends Component {

	constructor( texture ) {

		super();

		this.sprite = new PIXI.Sprite( PIXI.Texture.fromImage( texture ) );

		MainSystem.get( 'rendersys' ).add( this );
	}
}

module.exports = Appearance;