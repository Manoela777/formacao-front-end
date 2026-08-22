const btnAbrirModal = document.getElementById('btnAbrirModal');
const btnFecharModal = document.getElementById('btnFecharModal');
const btnConfirmar = document.getElementById('btnConfirmar');
const overlay = document.getElementById('overlay');

function abrirModal() {
    overlay.classList.add('ativo');
}

function fecharModal() {
    overlay.classList.remove('ativo');
}

btnAbrirModal.addEventListener('click', abrirModal);
btnFecharModal.addEventListener('click', fecharModal);
btnConfirmar.addEventListener('click', fecharModal);

overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
        fecharModal();
    }
});

document.addEventListener('keydown', function (e) { //não pode ser overlay porque ele só pega um elemento da tela, já o document pega tudo
    if (e.key === 'Escape') {
        fecharModal();
    }
});

//Escape = esc
//Enter
// ' ' ou SpaceBar
//ArrowUp
//ArrowLeft
//ArrowRight
//ArrowDown
//você pode colocar teclas como (e.key === 'a')
