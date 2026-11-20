const fotomeninas = [
    "img/fundo1.jfif",
    'img/fundo2.jfif',
    'img/fundo3.jpeg',
    'img/fundo4.jpeg',
    'img/fundo5.jpeg',
    'img/fundo6.jpeg',
    'img/fundo7.jpeg',
    'img/fundo8.jpeg',
    'img/fundo9.jpeg',
    'img/fundo10.jpeg',
    'img/fundo11.jpeg',
    'img/fundo12.jpeg',
    'img/fundo13.jpeg',
    'img/fundo14.jpeg',
    'img/fundo15.jpeg',
    'img/fundo16.jpeg',
    'img/fundo17.jpeg',
    'img/fundo18.jpeg',
    'img/fundo19.jpeg',
    'img/fundo20.jpeg',
    'img/fundo21.jpeg',
    'img/fundo22.jpeg',
    'img/fundo23.jpeg',
    'img/fundo24.jpeg',
    'img/fundo25.jpeg',
    'img/fundo26.jpeg',
    'img/fundo27.jpeg',
    'img/fundo28.jpeg',
    'img/fundo29.jpeg',
    'img/fundo30.jpeg',
    'img/fundo31.jpeg',
    'img/fundo32.jpeg',
    'img/fundo33.jpeg',
    'img/fundo34.jpeg',
    'img/fundo35.jpeg',
    'img/fundo36.jpeg',
    'img/fundo37.jpeg',
    'img/fundo38.jpeg',
    'img/fundo39.jpeg'
];

const randomizer = Math.floor(Math.random() * fotomeninas.length);
const fotoescolhida = fotomeninas[randomizer];

const foto = document.querySelector(".fundo-blur");
if (foto) {
    foto.style.backgroundImage = `url('${fotoescolhida}')`;
}

const fotofrente = document.querySelector(".fakeheader");
if (fotofrente) {
    fotofrente.style.backgroundImage = `url('${fotoescolhida}')`;
}