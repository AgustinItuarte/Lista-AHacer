import { crearPrioridades } from "./añadir_proyecto.js";

export default class Tarea{

    constructor(titulo, detalles, finFecha, prioridad, id, posicion){

        this.titulo = titulo;
        this.detalles = detalles;
        this.finFecha = finFecha;
        this.prioridad = prioridad;
        this.id = id;
        this.posicion = posicion;

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
        let ultimoElem = tareas.length - 1;
        tarea.posicion = ultimoElem;

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

export function listarTareas(evento) {
    
    const elemento = evento.target;
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas == null) tareas = [];
    let contenido = document.querySelector('.contenedor-tareas');

    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-aceptar') || elemento.classList.contains('borrar-tarea') || elemento.classList.contains('total-tareas')) {

        tareas.forEach(tarea => {
            
            if (tarea.id === contenido.dataset.id || elemento.classList.contains('total-tareas') || elemento.dataset.id === 'tareas') {

                if (tarea !== '') {

                    let div_tarea = document.createElement('div');
                    let borrar_tarea = document.createElement('div');
                    let editar_tarea = document.createElement('div');
                    div_tarea.className = 'tareas';
                    borrar_tarea.className = 'borrar-tarea';
                    editar_tarea.className = 'editar-tarea';
                    let titulo = document.createElement('div');
                    let detalles = document.createElement('div');
                    let fecha = document.createElement('div');
                    let prioridad = document.createElement('div');

                    if (tarea.prioridad === 'Baja') {
                        prioridad.style.backgroundColor = 'green'
                    } if (tarea.prioridad === 'Media') {
                        prioridad.style.backgroundColor = 'yellow'
                    } if (tarea.prioridad === 'Alta') {
                        prioridad.style.backgroundColor = 'red'
                    }

                    titulo.textContent = tarea.titulo;
                    detalles.textContent = tarea.detalles;
                    fecha.textContent = tarea.finFecha;
                    prioridad.textContent = tarea.prioridad;
                    div_tarea.dataset.posicion = tarea.posicion;
                    borrar_tarea.dataset.posicion = tarea.posicion;
                    editar_tarea.dataset.posicion = tarea.posicion;

                    if (elemento.classList.contains('total-tareas')) {
                        borrar_tarea.dataset.id = 'tareas';
                    } else {
                        borrar_tarea.dataset.id = tarea.id;
                    }
                    
                    borrar_tarea.textContent = 'Borrar';
                    editar_tarea.textContent = 'Editar';
                    div_tarea.appendChild(titulo);
                    div_tarea.appendChild(detalles);
                    div_tarea.appendChild(fecha);
                    div_tarea.appendChild(prioridad);
                    div_tarea.appendChild(borrar_tarea);
                    div_tarea.appendChild(editar_tarea);
                    contenido.appendChild(div_tarea);
                    
                }
                
            }
        
        });

    }
console.log(tareas)
}

export function borrarTarea(evento) {

    let elemento = evento.target
    
    if (elemento.classList.contains('borrar-tarea')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];
        let posicion = elemento.dataset.posicion;
        tareas[posicion] = '';

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

export function editarTarea(evento) {

    let elemento = evento.target;
    let id = elemento.dataset.id;

    if (elemento.classList.contains('editar-tarea')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];

        let posicion = elemento.dataset.posicion;
        let titulo = tareas[posicion].titulo;
        let detalles = tareas[posicion].detalles;
        let fin_fecha = tareas[posicion].finFecha;
        let prioridad = tareas[posicion].prioridad;

        generarFormEditar(id);
        /* tareas[posicion].titulo = prompt('Introduzca nuevo titulo:') */

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

function generarFormEditar(id) {

    const contenedor = document.querySelector('.contenedor-tareas');
    const form = document.createElement('form');
    const label_titulo = document.createElement('label');
    const label_detalles = document.createElement('label');
    const label_fecha = document.createElement('label');
    const input_titulo = document.createElement('input');
    const input_detalles = document.createElement('textarea');
    const fecha = document.createElement('input');
    const btn_aceptar = document.createElement('button');
    const btn_cancelar = document.createElement('button');
    const botones = document.createElement('div');
    const prioridad = document.createElement('select');

    crearPrioridades(prioridad);

    label_titulo.textContent = 'Titulo:';
    label_detalles.textContent = 'Detalles:';
    label_fecha.textContent = 'Fecha:';
    btn_aceptar.textContent = 'Aceptar';
    btn_cancelar.textContent = 'Cancelar';

    contenedor.appendChild(form);
    form.appendChild(label_titulo);
    form.appendChild(input_titulo);
    form.appendChild(label_detalles);
    form.appendChild(input_detalles);
    form.appendChild(label_fecha);
    form.appendChild(fecha);
    form.appendChild(prioridad);
    form.appendChild(botones);
    botones.appendChild(btn_aceptar);
    botones.appendChild(btn_cancelar);

    form.className = 'form-añadir-tarea';
    input_titulo.id = 'titulo-tarea';
    label_titulo.htmlFor = input_titulo.id;
    btn_aceptar.className = 'btn-aceptar';
    btn_cancelar.className = 'btn-cancelar';

    btn_aceptar.dataset.id = id;
    form.style.display = 'none';
    form.action = 'post'
    input_titulo.name = 'titulo-tarea';
    input_titulo.type = 'text';
    fecha.type = 'date';

    form.style.display = 'block';

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