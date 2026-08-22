const foto = document.getElementById('foto');

console.log(foto);

console.log(foto.getAttribute('src'));
console.log(foto.getAttribute('alt'));

foto.setAttribute('src', 'assets/img/cachorro.jpg');
foto.setAttribute('alt', 'Cachorro');

console.log(foto.getAttribute('src'));
console.log(foto.getAttribute('alt'));

foto.removeAttribute('alt');
console.log(foto.getAttribute('alt'));

const link = document.querySelector('a');

console.log(link);

link.href = "https://sp.senac.br";
link.target = "_blank";

const input = document.querySelector('input');
console.log(input);

input.value = "Texto de exemplo";
input.disabled = true;

