var palindromeController = createModalController(
	'palindromeModal',
	'openPalindromeModal',
	'close',
	'palindromeSubmitButton',
	'palindromeInput',
	'palindromeResult',
	'palindromeErrorMessage',
	function (clearInput, clearResult, clearErrorMessage) {
		var word = document.getElementById('palindromeInput').value;
		if (!word) {
			clearErrorMessage();
			document.getElementById('palindromeErrorMessage').textContent = 'Por favor, digite uma palavra ou frase.';
			return;
		}
		clearErrorMessage();
		var reversedWord = word.split('').reverse().join('');
		if (word === reversedWord) {
			document.getElementById('palindromeResult').innerHTML = word + ' é um palíndromo';
		} else {
			document.getElementById('palindromeResult').innerHTML = word + ' não é um palíndromo';
		}
		document.getElementById('palindromeInput').focus();
	}
);
