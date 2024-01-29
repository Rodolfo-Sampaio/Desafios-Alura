let totalGeral = 0;
limpar();

function adicionar() {
	//recuperar valores: nome do produto, quantidade e valor
	let produto = document.getElementById('produto').value;
	let quantidade = document.getElementById('quantidade').value;

	//verificar se o produto selecionado é válido
	if (!produto || produto.trim() === '') {
		alert('Selecione um produto válido.');
		return;
	}

	//verificar se a quantidade inserida é válida
	if (isNaN(quantidade) || quantidade <= 0) {
		alert('Insira uma quantidade válida.');
		return;
	}

	let nomeProduto = produto.split('-')[0];
	let valorUnitario = produto.split('R$')[1];

	//calcular o preço: subtotal
	let preco = quantidade * valorUnitario;
	let carrinho = document.getElementById('lista-produtos');

	//adicionar no carrinho
	carrinho.innerHTML += /*html*/ `
		<section class="carrinho__produtos__produto">
			<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
		</section>
	`;

	//atualizar o valor total
	totalGeral += preco;
	let campoTotal = document.getElementById('valor-total');
	campoTotal.textContent = `R$ ${totalGeral}`;
	document.getElementById('quantidade').value = 0;
}

function limpar() {
	totalGeral = 0;
	document.getElementById('lista-produtos').innerHTML = '';
	document.getElementById('valor-total').textContent = 'R$ 0';
}
