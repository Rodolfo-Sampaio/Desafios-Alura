function createModalController(
	modalId,
	openButtonId,
	closeButtonClass,
	submitButtonId,
	inputId,
	resultDivId,
	errorMessageId,
	submitCallback
) {
	var modal = document.getElementById(modalId);
	var btnOpen = document.getElementById(openButtonId);
	var spanClose = modal.getElementsByClassName(closeButtonClass)[0];
	var submitButton = document.getElementById(submitButtonId);
	var input = document.getElementById(inputId);
	var resultDiv = document.getElementById(resultDivId);
	var errorMessage = document.getElementById(errorMessageId);

	btnOpen.addEventListener('click', function (event) {
		modal.style.display = 'block';
		input.focus();
		clearResult();
		clearErrorMessage();
	});

	spanClose.addEventListener('click', function (event) {
		modal.style.display = 'none';
		clearInput();
		clearResult();
		clearErrorMessage();
	});

	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			modal.style.display = 'none';
			clearInput();
			clearResult();
			clearErrorMessage();
		}
	});

	submitButton.addEventListener('click', function (event) {
		submitCallback(clearInput, clearResult, clearErrorMessage);
	});

	function clearInput() {
		input.value = '';
	}

	function clearResult() {
		resultDiv.innerHTML = '';
	}

	function clearErrorMessage() {
		errorMessage.textContent = '';
	}

	return {
		clearInput: clearInput,
		clearResult: clearResult,
		clearErrorMessage: clearErrorMessage,
	};
}
