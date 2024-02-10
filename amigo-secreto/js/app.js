function adicionar() {
	let amigo = document.getElementById('nome-amigo');
	let listaDeAmigos = document.getElementById('lista-amigos');

	if (listaDeAmigos.textContent == '') {
		listaDeAmigos.textContent = amigo.value;
	} else {
		listaDeAmigos.textContent += ', ' + amigo.value;
	}
   
	amigo.value = '';
}
