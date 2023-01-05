import './style.css';
import {añadirProyecto, añadirTareas} from './añadir_proyecto.js';

let tareas = [];

const btn_proyecto = document.querySelector('.btn-añadirP');

btn_proyecto.addEventListener('click', () => {

    añadirProyecto('gym');

})

document.addEventListener('click', añadirTareas);
