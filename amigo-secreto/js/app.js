let amigos = [];

function adicionar() {
	let amigo = document.getElementById('nome-amigo');
	let listaDeAmigos = document.getElementById('lista-amigos');

	amigos.push(amigo.value);

	if (listaDeAmigos.textContent == '') {
		listaDeAmigos.textContent = amigo.value;
	} else {
		listaDeAmigos.textContent += ', ' + amigo.value;
	}

	amigo.value = '';
}

function sortear() {
	embaralha(amigos);
   alert(amigos)
}

function embaralha(lista) {
	for (let indice = lista.length; indice; indice--) {
		const indiceAleatorio = Math.floor(Math.random() * indice);

		[lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
	}
}
