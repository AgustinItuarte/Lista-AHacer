import './style.css';
import {añadirProyecto, añadirTareas} from './añadir_proyecto.js';

let tareas = [];

const btn_proyecto = document.querySelector('.btn-añadirP');
const btn_proy_select = document.querySelectorAll('li');

btn_proyecto.addEventListener('click', () => {

    añadirProyecto('gym');

})

btn_proy_select.addEventListener('click', () => {

    añadirTareas();
    console.log('click')

})
