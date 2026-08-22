// alert('teste')
const formulario = document.querySelector('#form-cadastro');

console.log(formulario);

//popular select

const selectPais = document.querySelector('#pais');
const paises = ['','Brasil', 'Portugal','Angola','Moçambique'];

paises.forEach((nomePais) =>{
    const opcao = document.createElement('option');
    opcao.value = nomePais;
    opcao.textContent = nomePais;
    selectPais.appendChild(opcao);
});

//aplica o estado de erro em um campo + escreve a mensagem
function mostrarErro(nomeCampo, mensagem){
    const campo = formulario.elements[nomeCampo];
    const spanErro = document.querySelector('#erro-' + nomeCampo);

    campo.classList.remove('valido');
    campo.classList.add('erro');
    spanErro.textContent = mensagem;
}

// aplica o estado de válido em um campo + limpa a mensagem
    function limparErro(nomeCampo){
        const campo = formulario.elements[nomeCampo];
        const spanErro = document.querySelector('#erro-'+nomeCampo);

        campo.classList.remove('erro');
        campo.classList.add('valido');
        spanErro.textContent = '';
    }

//funções de validação de cada campo

    function validarNome(){
        const valor = formulario.elements['nome'].value.trim();

        if(valor.length == 0){
            mostrarErro('nome','O nome não pode ficar vazio.');
            return false;
        }
        
        limparErro('nome');
        return true;
    }

    function validarSenha(){
        const valor = formulario.elements['senha'].value;
        if(valor.length < 6){
            mostrarErro('senha','A senha precisa ter pelo menos 6 caracteres.');
            return false;
        }
        limparErro('senha');
        return true;
    }

    function validarEmail(){
        const valor = formulario.elements['email'].value.trim();
        const padrao = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!padrao.test(valor)){
            mostrarErro('email','Digite um e-mail válido.');
            return false;
        }
        limparErro('email');
        return true;
    }

    function validarConfirmarSenha(){
        const senha = formulario.elements['senha'].value;
        const confirmacao = formulario.elements['confirmarSenha'].value;

        if(senha != confirmacao){
            mostrarErro('confirmarSenha','As senhas não coincidem.');
            return false;
        }
        limparErro('confirmarSenha');
        return true;
    }
    function validarIdade(){
        const valor = formulario.elements['idade'].value;
        if(!valor || valor < 18){
            mostrarErro('idade', 'É necessário preencher o campo idade e ter dezoito anos ou mais.')
            return false;
        }

        limparErro('idade');
        return true;
    }

    function validarTermos(){
        const marcado = formulario.elements['termos'].checked;
        const spanErro = document.querySelector('#erro-termos');

        if(!marcado){
            spanErro.textContent = 'É necessário aceitar os termos de uso.';
            return false;
        }
        spanErro.textContent = '';
        return true;
    }

//validando em tempo real (feedback imediato ao digitar)

formulario.elements['nome'].addEventListener('input', validarNome);
formulario.elements['senha'].addEventListener('input', ()=>{
    validarSenha();
    if (formulario.elements['confirmarSenha'].value){
        validarConfirmarSenha();
    }
});

formulario.elements['idade'].addEventListener('input', validarIdade);
formulario.elements['email'].addEventListener('input', validarEmail);
formulario.elements['termos'].addEventListener('change', validarTermos);
//change é um evento disparado quando um campo é alterado e essa alteração é confirmada


//interceptando o envio do formulário

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault(); // impede o recarregamento da página
    const nomeValido = validarNome();
    const senhaValido = validarSenha();
    const confirmacaoValida = validarConfirmarSenha();
    const idadeValida = validarIdade();
    const emailValida = validarEmail();
    const termoValido = validarTermos();




    const formularioValido = nomeValido && senhaValido && confirmacaoValida && idadeValida && emailValida && termoValido;
    if(!formularioValido){
        return;
    }

    const dados = new FormData(formulario);
    console.log(dados);
    const dadosObjeto = Object.fromEntries(dados);
    console.log(dadosObjeto);

    dadosObjeto.termos =  true;
    const resumo = document.querySelector('#resumo');
    const resumoConteudo = document.querySelector("#resumo-conteudo");
    resumoConteudo.textContent = JSON.stringify(dadosObjeto,null,2);

    resumo.style.display = 'block';
});