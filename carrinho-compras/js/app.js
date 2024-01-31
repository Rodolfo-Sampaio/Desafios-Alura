let totalGeral = 0;
let carrinhoItens = JSON.parse(localStorage.getItem('carrinhoItens')) || [];

document.addEventListener('DOMContentLoaded', function () {
	// Adiciona os itens do carrinho ao carregar a página
	carrinhoItens.forEach((item) => {
		const { nome, quantidade, preco } = item;
		const carrinho = document.getElementById('lista-produtos');

		carrinho.innerHTML += /*html*/ `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>
            </section>
        `;

		totalGeral += preco;
	});

	// Atualiza o valor total
	let campoTotal = document.getElementById('valor-total');
	campoTotal.textContent = `R$ ${totalGeral}`;
});

function adicionar() {
	// recuperar valores: nome do produto, quantidade e valor
	let produto = document.getElementById('produto').value;
	let quantidade = document.getElementById('quantidade').value;

	// verificar se o produto selecionado é válido
	if (!produto || produto.trim() === '') {
		alert('Selecione um produto válido.');
		return;
	}

	// verificar se a quantidade inserida é válida
	if (isNaN(quantidade) || quantidade <= 0) {
		alert('Insira uma quantidade válida.');
		return;
	}

	let nomeProduto = produto.split('-')[0];
	let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.'));

	// calcular o preço: subtotal
	let preco = quantidade * valorUnitario;
	let carrinho = document.getElementById('lista-produtos');

	// adicionar no carrinho
	carrinho.innerHTML += /*html*/ `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
    `;

	// atualizar o valor total
	totalGeral += preco;
	let campoTotal = document.getElementById('valor-total');
	campoTotal.textContent = `R$ ${totalGeral}`;
	document.getElementById('quantidade').value = 0;

	// salvar o item no LocalStorage
	carrinhoItens.push({
		nome: nomeProduto,
		quantidade: quantidade,
		preco: preco,
	});
	localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens));
}

function limpar() {
	totalGeral = 0;
	document.getElementById('lista-produtos').innerHTML = '';
	document.getElementById('valor-total').textContent = 'R$ 0';
	carrinhoItens = [];
	localStorage.removeItem('carrinhoItens');
}
