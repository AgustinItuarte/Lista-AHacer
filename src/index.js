import './style.css';
import {añadirProyecto, añadirProyectoEntorno, poblarUl} from './añadir_proyecto.js';
import { añadirTarea, listarTareas, mostrarFormTareas, ocultarFormTareas, borrarTarea, editarTarea, cambiarTareaArray, ocultarFormEditarTareas } from './tareas';

poblarUl();

const btn_añadir = document.querySelector('.btn-añadirP');
const btn_aceptar = document.querySelector('.btn-aceptar1');
const btn_cancelar = document.querySelector('.btn-cancelar1');
const form_proyecto = document.querySelector('.form-proyecto');

btn_añadir.addEventListener('click', () => { form_proyecto.hidden = false;  btn_añadir.hidden = true; });

document.addEventListener('click', añadirTarea);

document.addEventListener('click', borrarTarea);

document.addEventListener('click', editarTarea);

document.addEventListener('click', cambiarTareaArray);

document.addEventListener('click', añadirProyectoEntorno);

document.addEventListener('click', listarTareas);

document.addEventListener('click', mostrarFormTareas);

document.addEventListener('click', ocultarFormTareas);

document.addEventListener('click', ocultarFormEditarTareas);

btn_cancelar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
    form_proyecto.elements[0].value = '';
});

btn_aceptar.addEventListener('click', function(e) { 
    e.preventDefault(); 
    añadirProyecto();
    form_proyecto.hidden = true;
    btn_añadir.hidden = false;
    form_proyecto.elements[0].value = '';
});