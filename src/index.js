import './style.css';
import {añadirProyecto, añadirTareas, mostrarBoton} from './añadir_proyecto.js';

let tareas = [];

const btn_añadir = document.querySelector('.btn-añadirP');
const btn_aceptar = document.querySelector('.btn-aceptar');
const btn_cancelar = document.querySelector('.btn-cancelar');
const form_proyecto = document.querySelector('.form-proyecto');

btn_añadir.addEventListener('click', () => { form_proyecto.hidden = false;  btn_añadir.hidden = true; });

document.addEventListener('click', añadirTareas);

btn_cancelar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
});

btn_aceptar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    añadirProyecto();
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
});
