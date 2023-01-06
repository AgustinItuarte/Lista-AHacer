export default class Tarea{
    constructor(titulo, id){
        this.titulo = titulo;
        this.id = id;
    }
}

export function añadirTarea(evento) {

    const elemento = evento.target

    if (elemento.classList.contains('btn-añadir-tarea')) {

        let tarea = new Tarea('Cocinar', elemento.dataset.id)
        let tareas = JSON.parse(localStorage.getItem('tareas'));
        if(tareas == null) tareas = [];

        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        
    }

}

export function listarTareas(evento) {

    const elemento = evento.target;
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let contenido = document.querySelector('.contenedor-tareas');
    
    if (elemento.classList.contains('proyecto')) {

        tareas.forEach(tarea => {
            
            if (tarea.id === contenido.dataset.id) {
                
                let div_tarea = document.createElement('div');
                let titulo = document.createElement('h4');

                titulo.textContent = tarea.titulo;
                div_tarea.appendChild(titulo);
                contenido.appendChild(div_tarea);
                
            }

        });
        console.log(tareas)

    }

}