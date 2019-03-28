function onLoad() {
	const display = document.getElementById('display');
	let state = '0';
	const render = () => display.innerHTML = state;

	const handle = (key) => {
		if (!isNaN(Number(state + key))) {
			state += key;
		}
		else if(['c','C'].includes(key)){
			state = '0';
		}
		else if('Backspace' === key && !isNaN(Number(state.slice(0,-1)))){
			state = state.slice(0,-1);
		}

		if (state !== '0' && state[0] === '0' && !['.', ','].includes(state[1])) {
			state = state.slice(1);
		}
		render();
	}
	const handleKeyboard = (event) => {
		handle(event.key)
	}
	window.addEventListener('keydown',handleKeyboard);
	const handleMouse = (event) => {
		handle(event.target.innerHTML);
	}
	document.querySelectorAll('.key')
		.forEach(key => key.addEventListener('click', handleMouse));
}

window.addEventListener('load', onLoad);