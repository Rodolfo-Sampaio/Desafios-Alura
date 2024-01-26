var confirmButton = document.getElementById('confirmSubmitButton');
var cancelButton = document.getElementById('cancelSubmitButton');
var confirmationModal = document.getElementById('confirmationModal');
var closeIcon = document.querySelector('#confirmationModal .close');

window.addEventListener('click', function (event) {
	if (event.target === confirmationModal) {
		confirmationModal.style.display = 'none';
	}
});

closeIcon.addEventListener('click', function () {
	confirmationModal.style.display = 'none';
});

confirmButton.addEventListener('click', function (event) {
	var gameId = confirmButton.getAttribute('data-id');
	alterarStatus(gameId);
	confirmationModal.style.display = 'none';
});

cancelButton.addEventListener('click', function (event) {
	confirmationModal.style.display = 'none';
});

function showConfirmationModal(gameId) {
	var nameGameElement = document.getElementById(`game-${gameId}`).querySelector('.dashboard__item__name');
	var gameName = nameGameElement.textContent.trim();

	let botao = document.getElementById(`game-${gameId}`).querySelector('.dashboard__item__button');

	var confirmationMessageElement = document.getElementById('nameGame');
	if (!(botao.textContent == 'Devolver')) {
		confirmationMessageElement.textContent = `Alugar o jogo ${gameName} ?`;
    confirmButton.textContent = `Confirmar`
    cancelButton.textContent = `Não dessa vez!`
	} else {
		confirmationMessageElement.textContent = `Devolver o jogo ${gameName} ?`;
    confirmButton.textContent = `Sim, por favor!`
    cancelButton.textContent = `Cancelar`
	}

	confirmButton.setAttribute('data-id', gameId);
	confirmationModal.style.display = 'block';
}
