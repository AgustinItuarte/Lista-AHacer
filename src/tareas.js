import { añadirProyectoEntorno } from "./añadir_proyecto";

export default class Tarea{
    constructor(titulo, id){
        this.titulo = titulo;
        this.id = id;
    }
}

export function añadirTarea(evento) {

    const elemento = evento.target

    if (elemento.classList.contains('btn-añadir-tarea')) {

        let tarea = new Tarea('Organizar cosas', elemento.dataset.id)
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
    
    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-añadir-tarea')) {

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

//Guardas el titulo del proyecto en una variable y luego recargas
export function añadirTareaDom(evento) {

    const elemento = evento.target
    if (elemento.classList.contains('btn-añadir-tarea')) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const nom_proyecto_anterior = document.querySelector('h2')
        const main_content = document.querySelector('#contenido');
        const contenedor = document.createElement('div');
        const nom_proyecto = document.createElement('h2');
        const btn_añadir_tarea = document.createElement('button');
        const id = elemento.dataset.id;

        contenedor_anterior.remove();

        nom_proyecto.innerHTML = nom_proyecto_anterior.textContent;
        btn_añadir_tarea.innerHTML = '+ Añadir Tarea';

        main_content.appendChild(contenedor);
        contenedor.appendChild(nom_proyecto);
        contenedor.appendChild(btn_añadir_tarea);
        contenedor.className = 'contenedor-tareas';
        btn_añadir_tarea.className = 'btn-añadir-tarea';
        
        let contenedor_nuevo = document.querySelector('.contenedor-tareas')
        contenedor_nuevo.dataset.id = id;
        nom_proyecto.dataset.id = id;
        btn_añadir_tarea.dataset.id = id;

    }

};