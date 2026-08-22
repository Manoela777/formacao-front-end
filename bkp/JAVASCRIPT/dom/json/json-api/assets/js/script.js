const listaProduto = document.getElementById('lista-produtos');

if(listaProduto){

//fetch() faz uma requisição com protocolo http

fetch('https://fakestoreapi.com/products')
    //p fetch retorna uma resposta; resposta.json() transforma essa resposta em um objeto javascript
    .then(resposta => resposta.json())
   //depois que os dados forem convertidos , eles ficam disponíveis 'data'
   //'data' será um array contendo vários produtos
    .then(data => {
        console.log(data)

        //procura no html o elemento que possui id = 'lista-produto'


        //forEach percorre todos os produtos da array
        data.forEach(produto => {
            // console.log(produto.title)
            const produtoLi = document.createElement('li');
            //cria um novo elemento <li> usando o js

            //innerHTML permite criar conteúdo HTML dentro do js
            produtoLi.innerHTML = `

            <li>
                <div class="produto">
                    <img src="${produto.image}" alt="${produto.title}" srcset="">
                    <h3>${produto.title}</h3>
                    <p>$ ${produto.price}</p>
                    <a href="produto.html?id=${produto.id}">Ver produto</a>
                </div>
            </li>
            
            `;
            //appendChild adiciona o <li> que acabamos de criar dentro da <ul>
            listaProduto.appendChild(produtoLi)
        });
    })
    .catch(erro=>{
      document.getElementById('erro').innerText = 'Erro ao carregar produtos';

      console.log(erro);
    });
}

const produtoImagem = document.getElementById('produto-imagem');

if (produtoImagem){
const url = new URLSearchParams(window.location.search);
console.log(url)

const produtoId = url.get('id');
console.log(produtoId);

if(produtoId){
    fetch(`https://fakestoreapi.com/products/${produtoId}`)
        .then(resposta => resposta.json())
        .then(data => {
            console.log(data)


            document.getElementById('produto-imagem').src = data.image;
            document.getElementById('produto-titulo').innerText = data.title;
            document.getElementById('produto-descricao').innerText = data.description;
            document.getElementById('produto-preco').innerText = `R$ ${data.price}`;

        })
        .catch(erro =>{
            console.log('Erro ao carregar o produto')
            alert('Erro ao carregar o produto')
        })
}
}