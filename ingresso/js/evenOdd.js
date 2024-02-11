import { overlay } from './calculator.js';

let evenOddButton = document.getElementById('evenOddButton');
let evenOdd = document.getElementById('evenOdd');
let closeIconEvenOdd = document.querySelector('.evenOdd-container .close-icon');
let evenOddContainer = document.querySelector('.evenOdd-container');

function toggleEvenOddDisplay() {
	overlay.style.display = 'block';
	evenOddContainer.style.display = 'flex';
	overlay.classList.add('overlay-open');
	evenOdd.classList.add('modal-open');
	closeIconEvenOdd.classList.add('close-icon-open');
}

function closeEvenOddDisplay() {
	overlay.classList.remove('overlay-open');
	evenOdd.classList.remove('modal-open');
}

evenOddButton.addEventListener('click', toggleEvenOddDisplay);

overlay.addEventListener('click', function (event) {
	if (event.target === overlay) {
		closeEvenOddDisplay();
	}
});

closeIconEvenOdd.addEventListener('click', closeEvenOddDisplay);

let evenOddInput = document.getElementById('evenOddInput');

function checkEvenOrOdd() {
	let evenOddResult = document.getElementById('evenOddResult');

	if (evenOddInput.value % 2 == 0) {
		return (evenOddResult.textContent = `É par!`);
	} else {
		return (evenOddResult.textContent = `É impar!`);
	}
}

evenOddInput.addEventListener('input', function () {
	checkEvenOrOdd();
});
