let calculatorButton = document.getElementById('calculatorButton');
let overlay = document.getElementById('overlay');

calculatorButton.addEventListener('click', function (event) {
	overlay.classList.add('open'); 
});

overlay.addEventListener('click', function (event) {
	overlay.classList.remove('open');
});
