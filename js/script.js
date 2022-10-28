import { darkMode } from "./darkMode.js";
import { calcularImc } from "./imc.js";

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

btnDarkMode.addEventListener('click', darkMode);

calculoImc.addEventListener('click', calcularImc);