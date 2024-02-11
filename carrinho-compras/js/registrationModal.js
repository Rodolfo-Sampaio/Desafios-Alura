let closeModal = document.querySelector('.closeModal');
let declineInvitation = document.querySelector('.declineInvitation');
let registerButton = document.querySelector('#registerButton');
let registrationModal = document.querySelector('#registrationModal');
let inputRegistrationForm = document.querySelectorAll('.registrationForm input');
let registrationForm = document.querySelector('.registrationForm form');
let userLoginSection = document.getElementById('userLoginSection');

[closeModal, declineInvitation].forEach(function (element) {
	element.addEventListener('click', function () {
		registrationModal.classList.add('hidden');
		registerButton.classList.add('active');

		inputRegistrationForm.forEach(function (input) {
			input.value = '';
		});
	});
});

registerButton.addEventListener('click', function () {
	this.classList.remove('active');
	registrationModal.classList.remove('hidden');
});

registrationForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let nameInput = document.getElementById('userName');
	let firstName = nameInput.value.split(' ')[0];

	userLoginSection.style.display = 'block';

	userLoginSection.innerHTML = /*html*/ `
    <div class="welcomeMessage">Bem-vindo, ${firstName}!</div>
    <button onclick="sair()" type="button" class="logoutButton">Sair</button>
  `;

	registrationModal.classList.add('hidden');
	registerButton.style.display = 'none';
});

function sair() {
	userLoginSection.innerHTML = '';
	userLoginSection.style.display = 'none';
	registerButton.style.display = 'block';
	registerButton.classList.add('active');
}
