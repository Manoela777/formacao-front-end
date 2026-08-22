let titulo = document.getElementById('titulo');

console.log(document)
console.log(titulo)
console.log(titulo.textContent)

titulo.textContent = "A outro texto";

//////////////////////////////////////////////////////

let lista = document.getElementsByClassName('itemLi');
console.log(lista);
console.log('----------')

//////////////////////////////////////////////////////

let paragrafo = document.querySelector('p');

console.log(paragrafo);

/////////////////////////////////////////////////////

let paragrafoLista = document.querySelectorAll('p');

console.log(paragrafoLista)
console.log(paragrafoLista[3])

paragrafoLista.forEach(function(item){
    console.log(item)
    console.log(item.textContent)
});