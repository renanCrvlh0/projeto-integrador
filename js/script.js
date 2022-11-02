import { darkMode } from "./darkMode.js";
import { calcularImc } from "./imc.js";
import { abrirMapa } from "./mapa.js";
import { fecharMapa } from "./mapa.js";

const logo = document.querySelector('.logo');
const tituloLogo = document.querySelector('.titulo-logo');



logo.addEventListener('click', () =>{
    location.replace('../index.html');
})

tituloLogo.addEventListener('click', ()=>{
    location.replace('../index.html');
})
    


const btnDarkMode = document.querySelector('#mode');

const calculoImc = document.querySelector('#calcular');

const mapa = document.querySelector('.posto-de-saude');
const esconderMapa = document.querySelector('.fechar-mapa');

btnDarkMode.addEventListener('click', darkMode);

calculoImc.addEventListener('click', calcularImc);

mapa.addEventListener('click', abrirMapa);
esconderMapa.addEventListener('click', fecharMapa);
