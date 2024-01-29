function adicionar() {
	//recuperar valores: nome do produto, quantidade e valor
	let produto = document.getElementById('produto').value;
	let nomeProduto = produto.split('-')[0];
	let valorUnitario = produto.split('R$')[1];
	let quantidade = document.getElementById('quantidade').value;
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
}

function limpar() {}
