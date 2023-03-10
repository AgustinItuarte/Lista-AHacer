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

        if (input_titulo !== '' && detalles !== '' && finFecha !== '' && prioridad !== '') {

            let tarea = new Tarea(input_titulo, detalles, finFecha, prioridad, elemento.dataset.id)
            let tareas = JSON.parse(localStorage.getItem('tareas'));
            if(tareas == null) tareas = [];
            tareas.push(tarea);
            let ultimoElem = tareas.length - 1;
            tarea.posicion = ultimoElem;

            localStorage.setItem('tareas', JSON.stringify(tareas));

        } else {

            alert('Hay campos vacios');

        }
        
        

    }

}

export function listarTareas(evento) {
    
    const elemento = evento.target;
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    if(tareas == null) tareas = [];
    let contenido = document.querySelector('.contenedor-tareas');

    if (elemento.classList.contains('proyecto') ||
     elemento.classList.contains('btn-aceptar') ||
      elemento.classList.contains('borrar-tarea') ||
       elemento.classList.contains('total-tareas') ||
        elemento.classList.contains('btn-aceptar-editar')) {

        tareas.forEach(tarea => {
            
            if (tarea.id === contenido.dataset.id ||
                 elemento.classList.contains('total-tareas') ||
                  elemento.dataset.id === 'tareas') {

                if (tarea !== '') {

                    let div_tarea = document.createElement('div');
                    let borrar_tarea = document.createElement('div');
                    let editar_tarea = document.createElement('div');
                    let titulo = document.createElement('div');
                    let detalles = document.createElement('div');
                    let fecha = document.createElement('div');
                    let prioridad = document.createElement('div');

                    titulo.className = 'titulo-tareas';
                    detalles.className = 'detalles-tareas';
                    fecha.className = 'fecha-tareas';
                    div_tarea.className = 'tareas';
                    borrar_tarea.className = 'borrar-tarea';
                    editar_tarea.className = 'editar-tarea';
                    prioridad.className = 'prioridad-tareas';

                    if (tarea.prioridad === 'Baja') {
                        prioridad.style.backgroundColor = '#16a34a'
                    } if (tarea.prioridad === 'Media') {
                        prioridad.style.backgroundColor = '#fcd34d'
                    } if (tarea.prioridad === 'Alta') {
                        prioridad.style.backgroundColor = '#b91c1c'
                    }

                    titulo.textContent = tarea.titulo;
                    detalles.textContent = tarea.detalles;
                    fecha.textContent = tarea.finFecha;
                    div_tarea.dataset.posicion = tarea.posicion;
                    borrar_tarea.dataset.posicion = tarea.posicion;
                    editar_tarea.dataset.posicion = tarea.posicion;
                    editar_tarea.dataset.id = tarea.id;
                    titulo.dataset.posicion = tarea.posicion;
                    detalles.dataset.posicion = tarea.posicion;
                    fecha.dataset.posicion = tarea.posicion;
                    prioridad.dataset.posicion = tarea.posicion;

                    if (elemento.classList.contains('total-tareas') || elemento.dataset.id === 'tareas') {
                        borrar_tarea.dataset.id = 'tareas';
                    } else {
                        borrar_tarea.dataset.id = tarea.id;
                    }

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

        

        if (form.elements[0].value !== '' && form.elements[1].value !== '' && form.elements[2].value !== '' && form.elements[3].value !== '') {

            tareas[posicion].titulo = form.elements[0].value;
            tareas[posicion].detalles = form.elements[1].value;
            tareas[posicion].finFecha = form.elements[2].value;
            tareas[posicion].prioridad = form.elements[3].value;

            localStorage.setItem('tareas', JSON.stringify(tareas));

        } else {

            alert('Hay campos vacios');

        }

    }

}

function generarFormEditar(posicion, id, titulo, detalles, fin_fecha, prioridad1) {

    let contenedor_tareas_totales = document.querySelector(`div[data-id='tareas']`);
    const tareas = document.querySelectorAll(`div[data-posicion='${posicion}'`);
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

    form.dataset.posicion = posicion;
    form.dataset.id = id;
    
    if (contenedor_tareas_totales) {
        btn_aceptar.dataset.id = 'tareas';
    } else {
        btn_aceptar.dataset.id = id;
    }
    
    input_titulo.id = 'titulo-tarea';
    btn_cancelar.dataset.posicion = posicion;
    label_titulo.htmlFor = input_titulo.id;
    form.style.display = 'none';
    form.action = 'post'
    input_titulo.name = 'titulo-tarea';
    input_titulo.type = 'text';
    fecha.type = 'date';

    form.style.display = 'block';
    div_contenedor.style.display = 'block';
    div_contenedor.style.height = 'fit-content';

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

    if (elemento.classList.contains('proyecto')) {

        let array = JSON.parse(localStorage.getItem('array'));
        if(array == null) array = [];        

        array = [];


        localStorage.setItem('array', JSON.stringify(array));
    }

    if (elemento.classList.contains('btn-cancelar-editar')) {

        const tarea = document.querySelectorAll(`div[data-posicion='${posicion}']`);
        let form = document.querySelector(`form[data-posicion='${posicion}']`);
        
        tarea.forEach(div => {
            div.style.display = 'block';

            if (div.classList.contains('fecha-tareas')) {
                div.style.display = 'flex'
            }
        });

        tarea[0].style.display = 'grid';
        form.remove();

    } if (elemento.classList.contains('editar-tarea')) {

        let array = JSON.parse(localStorage.getItem('array'));
        if(array == null) array = [];

        let form = document.querySelector(`form[data-posicion='${posicion}']`)
        
        array.push(form.dataset.posicion)
        
        if (array[0] === array[1]) {

            let form = document.querySelector(`form[data-posicion='${array[0]}']`)
            if (form) {
                form.remove();
            }
            
            let divs = document.querySelectorAll(`div[data-posicion='${array[0]}']`)
            divs.forEach(elemento => {
                
                elemento.style.display = 'block'

                if (elemento.classList.contains('fecha-tareas')) {
                    elemento.style.display = 'flex'
                }
            });

            divs[0].style.display = 'grid';
            array = []

        } if (array.length > 1) {

            let form = document.querySelector(`form[data-posicion='${array[0]}']`)
            if (form) {
                form.remove();
            }
            let divs = document.querySelectorAll(`div[data-posicion='${array[0]}']`)

            array.splice(0, 1);

            divs.forEach(elemento => {
                
                elemento.style.display = 'block'

                if (elemento.classList.contains('fecha-tareas')) {
                    elemento.style.display = 'flex'
                }

            });

            divs[0].style.display = 'grid';

        }

        localStorage.setItem('array', JSON.stringify(array));

    } 

}