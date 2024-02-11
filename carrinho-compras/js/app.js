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
                <button class="remover-item" onclick="removerItem('${nome}')">✖</button>
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

	// Verificar se o produto já está no carrinho
	let produtoExistente = carrinhoItens.find((item) => item.nome === nomeProduto);

	if (produtoExistente) {
		// Atualizar a quantidade do produto existente
		produtoExistente.quantidade = parseInt(produtoExistente.quantidade) + parseInt(quantidade);
		produtoExistente.preco = produtoExistente.quantidade * valorUnitario;
	} else {
		// Adicionar novo item ao carrinho
		carrinhoItens.push({
			nome: nomeProduto,
			quantidade: quantidade,
			preco: quantidade * valorUnitario,
		});
	}

	// Atualizar a exibição do carrinho
	atualizarCarrinho();

	// Salvar o carrinho no LocalStorage
	localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens));

	// Limpar os campos
	document.getElementById('quantidade').value = 0;
}

function removerItem(nome) {
	// Remover o item do carrinho
	carrinhoItens = carrinhoItens.filter((item) => item.nome !== nome);

	// Atualizar a exibição do carrinho
	atualizarCarrinho();

	// Salvar o carrinho no LocalStorage
	localStorage.setItem('carrinhoItens', JSON.stringify(carrinhoItens));
}

function atualizarCarrinho() {
	let carrinho = document.getElementById('lista-produtos');
	carrinho.innerHTML = '';

	// Adicionar os itens do carrinho à exibição
	carrinhoItens.forEach((item) => {
		carrinho.innerHTML += /*html*/ `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">R$${item.preco}</span>
                <button class="remover-item" onclick="removerItem('${item.nome}')">✖</button>
            </section>
        `;
	});

	// Atualizar o valor total
	totalGeral = carrinhoItens.reduce((total, item) => total + item.preco, 0);
	let campoTotal = document.getElementById('valor-total');
	campoTotal.textContent = `R$ ${totalGeral}`;
}

function limpar() {
	totalGeral = 0;
	document.getElementById('lista-produtos').innerHTML = '';
	document.getElementById('valor-total').textContent = 'R$ 0';
	carrinhoItens = [];
	localStorage.removeItem('carrinhoItens');
}
