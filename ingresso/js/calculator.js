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
	}
});

closeIcon.addEventListener('click', function () {
	overlay.classList.remove('overlay-open');
	calculator.classList.remove('calculator-container-open');
});

let chosenOperation = document.getElementById('chosenOperation');

function updateChosenOperation(operation, iconClass) {
	chosenOperation.classList.add(operation);
	chosenOperation.innerHTML = /*html*/ `
		 <div class="operation-icon ${operation}-active">
			  <i class="fas ${iconClass}"></i>
		 </div>
	`;
}

let add = document.querySelector('.add');
add.addEventListener('click', function (event) {
	updateChosenOperation('add', 'fa-plus');
});

let subtract = document.querySelector('.subtract');
subtract.addEventListener('click', function (event) {
	updateChosenOperation('subtract', 'fa-minus');
});

let multiply = document.querySelector('.multiply');
multiply.addEventListener('click', function (event) {
	updateChosenOperation('multiply', 'fa-times');
});

let divide = document.querySelector('.divide');
divide.addEventListener('click', function (event) {
	updateChosenOperation('divide', 'fa-divide');
});