import { overlay } from './calculator.js';

let tempConverterButton = document.getElementById('tempConverterButton');
let tempConverter = document.getElementById('tempConverter');
let closeIconTempConverter = document.querySelector('.tempConverter-container .close-icon');
let tempConvertContainer = document.querySelector('.tempConverter-container');

function toggleTempConverterDisplay() {
	overlay.style.display = 'block';
	tempConvertContainer.style.display = 'flex';
	overlay.classList.add('overlay-open');
	tempConverter.classList.add('modal-open');
	closeIconTempConverter.classList.add('close-icon-open');
}

function closeTempConverterDisplay() {
	overlay.classList.remove('overlay-open');
	tempConverter.classList.remove('modal-open');
}

tempConverterButton.addEventListener('click', toggleTempConverterDisplay);

overlay.addEventListener('click', function (event) {
	if (event.target === overlay) {
		closeTempConverterDisplay();
	}
});

closeIconTempConverter.addEventListener('click', closeTempConverterDisplay);

let celsiusInput = document.getElementById('celsiusInput');
let fahrenheitInput = document.getElementById('fahrenheitInput');

function converterToFahrenheit() {
	return fahrenheitInput.value = parseFloat((celsiusInput.value * 9) / 5 + 32).toFixed(1);
}

function converterToCelsius() {
	return celsiusInput.value = parseFloat((fahrenheitInput.value - 32) * 5 / 9).toFixed(1);
}

celsiusInput.addEventListener('input', function () {
	converterToFahrenheit();
});

fahrenheitInput.addEventListener('input', function () {
	converterToCelsius();
});
