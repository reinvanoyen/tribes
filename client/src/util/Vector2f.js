class Vector2f {

	constructor ( x, y ) {

		this.x = x;
		this.y = y;
	}

	length() {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	}

	lerp( v, factor ) {

		return v.sub( this ).mul_f( factor ).add( this );
	}

	dot( v ) {

		return ( this.x * v.x ) + ( this.y * v.y );
	}

	normalized() {

		var length = this.length();
		return new Vector2f( this.x / length, this.y / length );
	}

	cross( v ) {
		return ( this.x * v.y ) - ( this.y * v.x );
	}

	rotate( angle ) {

		var rad = Math.toRadians( angle );
		var cos = Math.cos( rad );
		var sin = Math.sin( rad );

		return new Vector2f( this.x * cos - this.y * sin, this.x * sin + this.y * cos );
	}

	add( v ) {

		return new Vector2f( this.x + v.x, this.y + v.y );
	}

	sub( v ) {

		return new Vector2f( this.x - v.x, this.y - v.y );
	}

	mul( v ) {

		return new Vector2f( this.x * v.x, this.y * v.y );
	}

	div( v ) {

		return new Vector2f( this.x / v.x, this.y / v.y );
	}

	abs() {

		return new Vector2f( Math.abs( this.x ), Math.abs( this.y ) );
	}

	equals( v ) {

		return ( this.x === v.x && this.y === v.y );
	}
}

module.exports = Vector2f;