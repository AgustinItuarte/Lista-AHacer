import { añadirProyectoEntorno } from "./añadir_proyecto";

export default class Tarea{

    constructor(titulo, detalles, finFecha, prioridad, id){

        this.titulo = titulo;
        this.detalles = detalles;
        this.finFecha = finFecha;
        this.prioridad = prioridad;
        this.id = id;

    }

}

export function añadirTarea(evento) {

    const elemento = evento.target

    if (elemento.classList.contains('btn-aceptar')) {

        const form = document.querySelector('.form-añadir-tarea');
        let input_titulo = form.elements[0].value;
        let detalles = form.elements[1].value;
        let finFecha = form.elements[2].value;
        let prioridad = form.elements[3].value;
        
        let tarea = new Tarea(input_titulo, detalles, finFecha, prioridad, elemento.dataset.id)
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
                let titulo = document.createElement('div');
                let detalles = document.createElement('div');
                let fecha = document.createElement('div');
                let prioridad = document.createElement('div');

                if (tarea.prioridad === 'Baja') {
                    prioridad.style.backgroundColor = 'green'
                    console.log('baja')
                } if (tarea.prioridad === 'Media') {
                    prioridad.style.backgroundColor = 'yellow'
                } if (tarea.prioridad === 'Alta') {
                    prioridad.style.backgroundColor = 'red'
                }

                titulo.textContent = tarea.titulo;
                detalles.textContent = tarea.detalles;
                fecha.textContent = tarea.finFecha;
                prioridad.textContent = tarea.prioridad;
                div_tarea.appendChild(titulo);
                div_tarea.appendChild(detalles);
                div_tarea.appendChild(fecha);
                div_tarea.appendChild(prioridad);
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