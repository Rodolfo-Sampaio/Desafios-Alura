let calculatorButton = document.getElementById('calculatorButton');
let calculator = document.getElementById('calculator');
let overlay = document.getElementById('overlay');
let closeIcon = document.querySelector('.close-icon');
let calculatorContainer = document.querySelector('.calculator-container');

function toggleCalculatorDisplay() {
	overlay.style.display = 'block';
	calculatorContainer.style.display = 'flex';
	overlay.classList.add('overlay-open');
	calculator.classList.add('calculator-container-open');
	closeIcon.classList.add('close-icon-open');
}

function closeCalculatorDisplay() {
	overlay.classList.remove('overlay-open');
	calculator.classList.remove('calculator-container-open');
}

calculatorButton.addEventListener('click', toggleCalculatorDisplay);

overlay.addEventListener('click', function (event) {
	if (event.target === overlay) {
		closeCalculatorDisplay();
	}
});

closeIcon.addEventListener('click', closeCalculatorDisplay);

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
	let calculationResult;

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
			throw new Error('Erro: divisão por zero.');
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
				throw new Error('Operação inválida.');
		}
	}

	try {
		calculationResult = calculator(operation, a, b);
		result.innerText = `A ${operationName} é ${calculationResult}`;
	} catch (error) {
		result.innerText = error.message;
	}
}

function setupOperationButton(operation, iconClass) {
	let operationIcon = document.querySelector(`.${operation}`);
	operationIcon.addEventListener('click', function (event) {
		calculateAndSetOperation(operation, iconClass);
	});
}

setupOperationButton('add', 'fa-plus');
setupOperationButton('subtract', 'fa-minus');
setupOperationButton('multiply', 'fa-times');
setupOperationButton('divide', 'fa-divide');
