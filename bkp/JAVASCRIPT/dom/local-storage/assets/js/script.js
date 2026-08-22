//criar um localStorage
//localStorage.setItem('chave','valor');

localStorage.setItem('nome','Manoela');


//recuperar os dados do localStorage
//localStorage.getItem('chave');

let nomeDoLocalStorage = localStorage.getItem('nome');

console.log(nomeDoLocalStorage);

//remover um item do localStorage
//localStorage.removeItem('chave');

localStorage.removeItem('nome');
nomeDoLocalStorage = localStorage.getItem('nome');
console.log(nomeDoLocalStorage);

//limpar todo o localStorage
localStorage.clear();
console.log(nomeDoLocalStorage);

if(nomeDoLocalStorage){
    console.log('existe');
}else{
    console.log('não existe');
}