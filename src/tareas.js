import { añadirProyectoEntorno } from "./añadir_proyecto";

export default class Tarea{
    constructor(titulo, id){
        this.titulo = titulo;
        this.id = id;
    }
}

export function añadirTarea(evento) {

    const elemento = evento.target

    if (elemento.classList.contains('btn-aceptar')) {

        const form = document.querySelector('.form-añadir-tarea');
        let input_titulo = form.elements[0].value;
        
        let tarea = new Tarea(input_titulo, elemento.dataset.id)
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];

        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

export function listarTareas(evento) {

    añadirProyectoEntorno(evento);
    
    const elemento = evento.target;
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas == null) tareas = [];
    let contenido = document.querySelector('.contenedor-tareas');
    
    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-aceptar')) {

        tareas.forEach(tarea => {
            
            if (tarea.id === contenido.dataset.id) {
                
                let div_tarea = document.createElement('div');
                div_tarea.className = 'tareas';
                let titulo = document.createElement('h4');

                titulo.textContent = tarea.titulo;
                div_tarea.appendChild(titulo);
                contenido.appendChild(div_tarea);
                
            }

        });
        console.log(tareas)
    }

}

export function mostrarFormTareas(evento) {
    
    evento.preventDefault();
    let elemento = evento.target
    const form = document.querySelector('.form-añadir-tarea');

    if (elemento.classList.contains('btn-añadir-tarea')) {
        form.style.display = 'block';
    }

}

export function ocultarFormTareas(evento) {
    
    evento.preventDefault();
    let elemento = evento.target
    const form = document.querySelector('.form-añadir-tarea');
    
    if (elemento.classList.contains('btn-cancelar')) {
        form.style.display = 'none';
    }

}