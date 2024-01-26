var sortController = createModalController(
	'sortModal',
	'openSortModal',
	'close',
	'sortSubmitButton',
	'sortInput',
	'sortResult',
	'sortErrorMessage',
	function (clearInput, clearResult, clearErrorMessage) {
		var numbers = document.getElementById('sortInput').value.split(' ').map(Number);

		for (var i = 0; i < numbers.length; i++) {
			if (isNaN(numbers[i])) {
				clearResult();
				document.getElementById('sortErrorMessage').textContent = 'Por favor, digite apenas números.';
				return;
			}
		}

		clearErrorMessage();
		clearResult();
		document.getElementById('sortInput').focus();

		numbers.sort((a, b) => a - b);

		document.getElementById('sortResult').innerHTML = numbers.join(' ');
	}
);
