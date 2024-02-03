let calculatorButton = document.getElementById('calculatorButton');
let calculator = document.getElementById('calculator');
let overlay = document.getElementById('overlay');
var closeIcon = document.querySelector('.close-icon');
var calculatorContainer = document.querySelector('.calculator-container');

calculatorButton.addEventListener('click', function (event) {
	overlay.style.display = 'block';
	calculatorContainer.style.display = 'flex';
	overlay.classList.add('overlay-open');
	calculator.classList.add('calculator-container-open');
	closeIcon.classList.add('close-icon-open');
});

overlay.addEventListener('click', function (event) {
	if (event.target === overlay) {
		overlay.classList.remove('overlay-open');
		calculator.classList.remove('calculator-container-open');
		closeIcon.classList.remove('close-icon-open');
	}
});

closeIcon.addEventListener('click', function () {
	overlay.classList.remove('overlay-open');
	calculator.classList.remove('calculator-container-open');
	closeIcon.classList.remove('close-icon-open');
});
