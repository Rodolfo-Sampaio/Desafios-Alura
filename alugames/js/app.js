function alterarStatus(id) {
	let gameClicado = document.getElementById(`game-${id}`);
	let imagem = gameClicado.querySelector('.dashboard__item__img');
	let botao = gameClicado.querySelector('.dashboard__item__button');
	let nome = gameClicado.querySelector('.dashboard__item__name');

	if (imagem.classList.contains('dashboard__item__img--rented')) {
		imagem.classList.remove('dashboard__item__img--rented');
		botao.textContent = 'Alugar';
		botao.classList.remove('dashboard__item__button--return');
		displayConfirmationMessage(`Jogo ${nome.textContent} devolvido!`, '#078330');
	} else {
		imagem.classList.add('dashboard__item__img--rented');
		botao.textContent = 'Devolver';
		botao.classList.add('dashboard__item__button--return');
		displayConfirmationMessage(`Jogo ${nome.textContent} alugado!`, '#094997');
	}

	countRentedGames();
}

function countRentedGames() {
	let count = 0;

	let buttons = document.querySelectorAll('.dashboard__item__button');

	buttons.forEach((button) => {
		if (button.textContent == 'Devolver') {
			count += 1;
		}
	});

	let rentedGamesCount = document.getElementById('rentedGamesCount');
	rentedGamesCount.textContent = `Número de jogos alugados: ${count}`;
}

function displayConfirmationMessage(message, backgroundColor) {
	var containerElement = document.getElementById('confirmationContainer');

	var messageElement = document.createElement('span');
	messageElement.textContent = message;
	messageElement.className = 'confirmationMessage';
	messageElement.style.backgroundColor = backgroundColor;

	containerElement.appendChild(messageElement);

	setTimeout(function () {
		messageElement.classList.add('display');
	}, 10);

	setTimeout(function () {
		messageElement.classList.remove('display');
	}, 4000);

	setTimeout(function () {
		containerElement.removeChild(messageElement);
	}, 6000);
}
