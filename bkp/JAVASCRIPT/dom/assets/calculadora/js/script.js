function pegarValores(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);

    return{
        n1,n2
    };
}

function mostrarResultado(valor){
    document.querySelector("#resultado span").textContent = valor;
}


function somar(){
    let dados = pegarValores();

    let resultado = dados.n1 + dados.n2;

    mostrarResultado(resultado);
}

function subtrair(){
    let dados = pegarValores();

    let resultado = dados.n1 - dados.n2;

    mostrarResultado(resultado);
}

function divisao(){
    let dados = pegarValores();

    let resultado = dados.n1 / dados.n2;

    mostrarResultado(resultado);
}

function multiplicacao(){
    let dados = pegarValores();

    let resultado = dados.n1 * dados.n2;

    mostrarResultado(resultado);
}