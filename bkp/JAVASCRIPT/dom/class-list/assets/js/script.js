const paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);

//adicionar uma classe

//paragrafo.classList.add('destaque');

//remover uma classe
//paragrafo.classList.remove('destaque');

// alternar (toggle): adiciona se não existe, e remove se já existe
//paragrafo.classList.toggle('destaque');

//verificar se a classe existe
//console.log(paragrafo.classList.contains('destaque'));//true ou false

//////////////////////////////////////////////////

const curtida = document.getElementById('curtida');
console.log(curtida);

//curtida.classList.add('curtida');

curtida.addEventListener("click", function(){
curtida.classList.toggle('curtida');
});