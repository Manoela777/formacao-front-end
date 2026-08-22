const btnTema = document.getElementById('btnTema');

let temaSalvo = localStorage.getItem('tema');

if(temaSalvo){
    document.body.className = temaSalvo;
}else{
    document.body.className = 'claro';
}

btnTema.addEventListener('click' , ()=>{
    if(document.body.classList.contains('claro')){
        document.body.className = 'escuro';
        localStorage.setItem('tema', 'escuro');
    }else{
        document.body.className = 'claro';
        localStorage.setItem('tema','claro');
    }

    atualizarIcone();
});



function atualizarIcone(){
    if(document.body.classList.contains('escuro')){
        btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}
atualizarIcone();
