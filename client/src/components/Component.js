class Component {

	attach( e ) {

		this.entity = e;
	}

	get name() {
		throw "Component needs to implement name";
	}
}

module.exports = Component;