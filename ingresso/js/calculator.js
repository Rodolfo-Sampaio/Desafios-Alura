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

function calculateAndSetOperation(operation, iconClass) {
	chosenOperation.classList.add(operation);
	let result = document.getElementById('result');
	chosenOperation.innerHTML = /*html*/ `
		 <div class="operation-icon ${operation}-active">
			  <i class="fas ${iconClass}"></i>
		 </div>
	`;

	let a = parseInt(document.getElementById('inputA').value);
	let b = parseInt(document.getElementById('inputB').value);
	let operationName = '';
	let calculationResult = calculator(operation, a, b);

	function add(a, b) {
		return a + b;
	}

	function subtract(a, b) {
		return a - b;
	}

	function multiply(a, b) {
		return a * b;
	}

	function divide(a, b) {
		if (b !== 0) {
			return a / b;
		} else {
			return 'Erro: divisão por zero.';
		}
	}
	function calculator(operation, a, b) {
		switch (operation) {
			case 'add':
				operationName = 'soma';
				return add(a, b);
			case 'subtract':
				operationName = 'subtração';
				return subtract(a, b);
			case 'multiply':
				operationName = 'multiplicação';
				return multiply(a, b);
			case 'divide':
				operationName = 'divisão';
				return divide(a, b);
			default:
				return 'Operação inválida.';
		}
	}

	if (calculationResult !== 'Erro: divisão por zero.') {
		result.innerText = `A ${operationName} é ${calculationResult}`;
	} else {
		result.innerText = calculationResult;
	}
}

let addIcon = document.querySelector('.add');
addIcon.addEventListener('click', function (event) {
	calculateAndSetOperation('add', 'fa-plus');
});

let subtractIcon = document.querySelector('.subtract');
subtractIcon.addEventListener('click', function (event) {
	calculateAndSetOperation('subtract', 'fa-minus');
});

let multiplyIcon = document.querySelector('.multiply');
multiplyIcon.addEventListener('click', function (event) {
	calculateAndSetOperation('multiply', 'fa-times');
});

let divideIcon = document.querySelector('.divide');
divideIcon.addEventListener('click', function (event) {
	calculateAndSetOperation('divide', 'fa-divide');
});
