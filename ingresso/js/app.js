function comprar() {
	let tipo = document.getElementById('tipo-ingresso');
	let qtd = parseInt(document.getElementById('qtd').value);

	processarCompra(qtd, tipo.value);
}

function processarCompra(qtd, qtdTipo) {
	let qtdDisponivel = parseInt(document.getElementById(`qtd-${qtdTipo}`).textContent);
	if (qtd > qtdDisponivel) {
		alert(`Quantidade indisponível para tipo ${qtdTipo}`);
	} else {
		qtdDisponivel -= qtd;
		document.getElementById(`qtd-${qtdTipo}`).textContent = qtdDisponivel;
		alert('Compra realizada com sucesso');
	}
}
