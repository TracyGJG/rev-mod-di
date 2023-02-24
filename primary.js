export default function ({ sayHello }) {
	return {
		welcome,
	};

	function welcome(name) {
		return `_${sayHello(name)}_`;
	}
}
