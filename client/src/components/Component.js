class Component {

	toString() {

		return 'unnamed_component';
	}

	attach( entity ) {

		this.entity = entity;
		this.onAttach( entity );
	}

	detach() {

		if( this.entity ) {

			let entity = this.entity;
			this.entity = null;
			this.onDetach( entity );
		}
	}

	onAttach( entity ) {}
	onDetach( entity ) {}
	update( delta ) {}
}

module.exports = Component;