class Component {

	attach( e ) {

		this.entity = e;
	}

	toString() {

		return 'unnamed_component';
	}
}

module.exports = Component;