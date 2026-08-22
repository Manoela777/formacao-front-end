const urlParams = new URLSearchParams(window.location.search);
const idViagem = parseInt(urlParams.get('id')); 

if (idViagem) {
  fetch('assets/js/dados.json')
    .then(res => res.json())
    .then(destinos => {
      const destino = destinos.find(item => item.id === idViagem);

      if (!destino) {
        document.getElementById('destino-nome').innerText = 'Destino nÃ£o encontrado!';
        return;
      }

      document.getElementById('destino-nome').innerText = destino.nome;
      document.getElementById('destino-descricao').innerText = destino.descricao;
      document.getElementById('destino-preco').innerText = destino.preco.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
      });

      const galeria = document.getElementById('galeria-fotos');
      if (galeria) {
        galeria.innerHTML = destino.imagens.map((img, index) => 
          `<img src="${img}" alt="${destino.nome}" class="${index === 0 ? 'img-gallery' : ''}">`
        ).join('');
      }

      const gridIncluso = document.getElementById('incluso-grid');
      if (gridIncluso) {
        let htmlIncluso = '';

        if (destino.incluso.passagens) {
          htmlIncluso += `<p class="include-item"><i class="fas fa-plane"></i> Passagens aÃ©reas ida/volta</p>`;
        }
        if (destino.incluso.hotel_5_estrelas) {
          htmlIncluso += `
            <p class="include-item">
              <i class="fas fa-hotel"></i> Hospedagem 5 estrelas
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </p>`;
        }
        if (destino.incluso.cafe_manha) {
          htmlIncluso += `<p class="include-item"><i class="fas fa-utensils"></i> CafÃ© da manhÃ£ incluso</p>`;
        }
        if (destino.incluso.transfer) {
          htmlIncluso += `<p class="include-item"><i class="fas fa-car"></i> Transfer aeroporto/hotel</p>`;
        }
        gridIncluso.innerHTML = htmlIncluso;
      }

      const itinerarioContainer = document.getElementById('itinerario-container');
      if (itinerarioContainer) {
        itinerarioContainer.innerHTML = destino.itinerario.map(etapa => `
          <div class="itinerary-step">
            <p class="step-number">${etapa.passo}</p>
            <div>
              <h3>${etapa.titulo}</h3>
              <p>${etapa.descricao}</p>
            </div>
          </div>
        `).join('');
      }
    })
    .catch(erro => {
      console.log('Erro ao carregar o destino', erro);
      alert('Erro ao carregar o destino');
    });
}

const menuBtn = document.querySelector('#menu-toggle');
const navContainer = document.querySelector('.nav-container');
const overlay = document.querySelector('#overlay');
function toggleMenu(){
  const isActive = navContainer.classList.toggle('active');
  //console.log('teste')
  menuBtn.classList.toggle('is-active');
  overlay.classList.toggle('active');
  document.body.style.overflow = isActive ? 'hidden' : 'auto';
}

menuBtn.addEventListener('click', toggleMenu)
overlay.addEventListener('click', toggleMenu)

document.querySelectorAll('.nav-links a').forEach(link =>{
  link.addEventListener('click',()=>{
    if(navContainer.classList.contains('active')){
      toggleMenu();
    }
  })
});

//accordion

document.querySelectorAll('.accordion-header').forEach(header=>{
  header.addEventListener('click', ()=>{
    const item = header.parentElement;
    console.log(item);

    const estaAberto = item.classList.contains('active');
    console.log(estaAberto);
    //fecha todos os itens
    document.querySelectorAll('.item-accordion').forEach(outroItem =>{
      outroItem.classList.remove('active');
      const outroIcone = outroItem.querySelector('i');
      outroIcone.style.transform = 'rotate(0deg)';
    });

    console.log(estaAberto);

    if(estaAberto != true){
      item.classList.add('active');
      const icon = header.querySelector('i');
      icon.style.transform = 'rotate(180deg)';
    }

  });
});

const destinos = [
  {
    id:1,
    nome:'Fernando de Noronha',
    preco:'R$ 3.200,00',
    cat:'praia',
    img:'C:/Users/manoela.oboross/Desktop/formacao-frontend-2026-main/formacao-front-end/explora-mundo/assets/image/destino1.jpg'
  },
  {
    id:2,
    nome:'Gramado',
    preco:'R$ 1.800,00',
    cat:'neve',
    img:'C:/Users/manoela.oboross/Desktop/formacao-frontend-2026-main/formacao-front-end/explora-mundo/assets/image/destino2.jpg'
  },
  {
    id:3,
    nome:'New York',
    preco:'R$ 7.900,00',
    cat:'cidade',
    img:'C:/Users/manoela.oboross/Desktop/formacao-frontend-2026-main/formacao-front-end/explora-mundo/assets/image/destino3.jpg'
  },
  {
    id: 4,
    nome:'Bonito',
    preco:'R$ 2.500,00',
    cat:'campo',
    img:'C:/Users/manoela.oboross/Desktop/formacao-frontend-2026-main/formacao-front-end/montanha123.jpg'
  }
]

function renderizar(lista){
  const grid = document.getElementById('grid-container');

  grid.innerHTML = lista.map(d => 
    `
            <div class="card" data-category="${d.cat}">
                <img src="${d.img}" alt="">
                <div class="card-body">
                    <h3>${d.nome}</h3>
                    <p class="price">${d.preco}</p>
                    <button class="btn-primary" onclick = "verDetalhes(${d.id})">Ver oferta</button>
                </div>
            </div>
    `
  ).join('')
}

document.querySelectorAll('.cat-item').forEach(item =>{
  item.addEventListener('click',() =>{
    const filter = item.getAttribute('data-filter');
    const filtrados = destinos.filter(d => d.cat == filter);
    renderizar(filtrados)
  });
});

function verDetalhes(id){
  window.location.href = `destino.html?id=${id}`
}

renderizar(destinos);