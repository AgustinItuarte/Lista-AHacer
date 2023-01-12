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

    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-aceptar') || elemento.classList.contains('borrar-tarea') || elemento.classList.contains('total-tareas') || elemento.classList.contains('btn-aceptar-editar')) {

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
                    editar_tarea.dataset.id = tarea.id;
                    titulo.dataset.posicion = tarea.posicion;
                    detalles.dataset.posicion = tarea.posicion;
                    fecha.dataset.posicion = tarea.posicion;
                    prioridad.dataset.posicion = tarea.posicion;

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
    let posicion = elemento.dataset.posicion;
    

    if (elemento.classList.contains('editar-tarea')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];

        let posicion1 = posicion;
        let titulo = tareas[posicion].titulo;
        let detalles = tareas[posicion].detalles;
        let fin_fecha = tareas[posicion].finFecha;
        let prioridad1 = tareas[posicion].prioridad;
        let id = tareas[posicion].id;

        generarFormEditar(posicion1, id, titulo, detalles, fin_fecha, prioridad1);

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

export function cambiarTareaArray(evento) {
    
    let elemento = evento.target

    if (elemento.classList.contains('btn-aceptar-editar')) {

        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];
        let form = document.querySelector('.form-editar-tarea');
        let posicion = elemento.dataset.posicion;

        tareas[posicion].titulo = form.elements[0].value;
        tareas[posicion].detalles = form.elements[1].value;
        tareas[posicion].finFecha = form.elements[2].value;
        tareas[posicion].prioridad = form.elements[3].value;

        localStorage.setItem('tareas', JSON.stringify(tareas));

    }

}

function generarFormEditar(posicion, id, titulo, detalles, fin_fecha, prioridad1) {

    const tareas = document.querySelectorAll(`div[data-posicion='${posicion}']`);
    const div_contenedor = tareas[0]
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

    for (let i = 1; i < tareas.length; i++) {

        tareas[i].style.display = 'none'
        
    }

    label_titulo.textContent = 'Titulo:';
    label_detalles.textContent = 'Detalles:';
    label_fecha.textContent = 'Fecha:';
    btn_aceptar.textContent = 'Aceptar';
    btn_cancelar.textContent = 'Cancelar';

    input_titulo.value = titulo;
    input_detalles.value = detalles;
    fecha.value = fin_fecha;
    prioridad.value = prioridad1;

    div_contenedor.appendChild(form);
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

    form.className = 'form-editar-tarea';
    btn_aceptar.className = 'btn-aceptar-editar';
    btn_cancelar.className = 'btn-cancelar-editar';
    btn_aceptar.dataset.posicion = posicion;
    /* detalles.dataset.posicion = posicion;
    fecha.dataset.posicion = posicion;
    prioridad.dataset.posicion = posicion; */

    form.dataset.posicion = posicion;
    form.dataset.id = id;
    btn_aceptar.dataset.id = id;
    input_titulo.id = 'titulo-tarea';
    btn_cancelar.dataset.posicion = posicion;
    label_titulo.htmlFor = input_titulo.id;
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

export function ocultarFormEditarTareas(evento) {

    evento.preventDefault();
    let elemento = evento.target
    let posicion = elemento.dataset.posicion;
    let id = elemento.dataset.id;
    
    if (elemento.classList.contains('btn-cancelar-editar')) {
        let form_grupo = document.querySelectorAll(`form[data-id='${id}']`);
        console.log(form_grupo)
        /* form_grupo[0].remove(); */
        const tarea = document.querySelectorAll(`div[data-posicion='${posicion}']`);
        let form = document.querySelector(`form[data-posicion='${posicion}']`);
        
        tarea.forEach(div => {
            div.style.display = 'block'
        });

        form.remove();

    } if (elemento.classList.contains('editar-tarea')) {

        let form_grupo = document.querySelectorAll(`form[data-id='${id}']`);
        const tarea = document.querySelectorAll(`div[data-posicion='${posicion}']`);
        
        if (form_grupo.length > 1) {
            // Necesito seleccionar la posicion anterior guardar el valor porque al darle a otro editar cambia la posicion y no muestra las tareas que quiero. 2 guardar el array de tareas y actuar sobre el valor 0.
            form_grupo[0].remove();
            console.log(tarea)
            /* tarea.forEach(div => {
                div.style.display = 'block'
            }); */

        }
        
    } 

}