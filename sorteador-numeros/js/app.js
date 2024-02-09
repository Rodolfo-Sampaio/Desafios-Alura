let resultado = document.getElementById('resultado');
let btnReiniciar = document.getElementById('btn-reiniciar');

function sortear() {
	let quantidade = parseInt(document.getElementById('quantidade').value);
	let de = parseInt(document.getElementById('de').value);
	let ate = parseInt(document.getElementById('ate').value);
	let numeros = [];

   if (de < ate) {
      function gerarNumero(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
      }
   
      function sortearSemRepeticao(quantidade, min, max) {
         if (quantidade > max - min + 1) {
            resultado.innerHTML = /*html*/ `
           <label class="texto__paragrafo">Não há números únicos suficientes no intervalo especificado.</label>
           `;
            return;
         }
   
         let numerosSorteados = new Set();
   
         while (numerosSorteados.size < quantidade) {
            let numeroSorteado = gerarNumero(min, max);
            numerosSorteados.add(numeroSorteado);
         }
   
         return Array.from(numerosSorteados);
      }
   
      numeros = sortearSemRepeticao(quantidade, de, ate);
   
      if (btnReiniciar.classList.value === 'container__botao-desabilitado') {
         btnReiniciar.classList.value = 'container__botao';
      }
   
      resultado.innerHTML = /*html*/ `
         <label class="texto__paragrafo">Números sorteados:  ${numeros.join(', ')}.</label>
      `;
   
      numeros = [];
   } else {
      resultado.innerHTML = /*html*/ `
      <label class="texto__paragrafo">O valor no campo “Do número” deve ser menor que o valor no campo “Até o número”.</label>
   `;
   }
}

function reiniciar() {
	quantidade.value = '';
	de.value = '';
	ate.value = '';
	if (btnReiniciar.classList.value == 'container__botao') {
		btnReiniciar.classList.value = 'container__botao-desabilitado';
	}
	resultado.innerHTML = /*html*/ `
      <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>
   `;
}
