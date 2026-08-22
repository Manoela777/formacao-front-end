const slidesContainer = document.getElementById('slides');

const slides = document.querySelectorAll('.slide');

const btnAnterior = document.getElementById('btnAnterior');
const btnProximo = document.getElementById('btnProximo');

const indicadoresContainer = document.getElementById('indicadores');

let indiceAtual = 0; //como ele vai ser alterado, não pode ser uma constante

const totalSlides = slides.length;

for(let i=0; i < totalSlides; i++){
    //console.log('teste');

    const dot = document.createElement('span');
    dot.classList.add('dot');

    if(i === 0){
        dot.classList.add('ativo');
    }

    dot.addEventListener('click', ()=>{
        irParaSlide(i);
    })

    indicadoresContainer.appendChild(dot)
}

const dots = document.querySelectorAll('.dot');

function atualizarBanner(){
    const deslocamento = -indiceAtual * 100;
    slidesContainer.style.transform = `translateX(${deslocamento}%)`;

    dots.forEach((dot,index)=>{
        dot.classList.toggle('ativo', index === indiceAtual);
    });
}

function irParaSlide(indice){
    console.log(indice);
    indiceAtual = indice;
    atualizarBanner();
}

function proximoSlide(){
    indiceAtual = (indiceAtual + 1) % totalSlides;
    atualizarBanner();
    console.log('proximo')
}

function anteriorSlide(){
    indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
    atualizarBanner();
    console.log('anterior')
}

btnProximo.addEventListener('click', proximoSlide);
btnAnterior.addEventListener('click', anteriorSlide);

let autoPlay = setInterval(proximoSlide, 4000);

const bannerElemento = document.querySelector('.banner');

bannerElemento.addEventListener('mouseenter', ()=>{
    clearInterval(autoPlay);
});

bannerElemento.addEventListener('mouseleave',()=>{
    autoPlay = setInterval(proximoSlide, 4000);
});


atualizarBanner();