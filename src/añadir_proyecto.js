let proyectos = [];

export function añadirProyecto(nombre) {

    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');
    /* const contenedor = document.querySelector('#contenido') */
    const proyecto = document.createElement('li');
    /* const contenidoProyecto = document.createElement('div') */

    proyectos.push(proyecto);
    proyecto.dataset.id = `${ultimoElem}`;
    proyecto.className = 'proyecto';
    /* contenidoProyecto.dataset.id = `${ultimoElem}`;
    contenidoProyecto.className = 'main-content'; */

    proyecto.textContent = nombre;

    /* contenedor.appendChild(contenidoProyecto); */
    proyectosUl.appendChild(proyecto);

}

export function añadirTareas(evento){

    const elemento = evento.target
    if (elemento.classList.contains('proyecto')) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const main_content = document.querySelector('#contenido')
        const contenedor = document.createElement('div');
        const id = elemento.dataset.id;

        contenedor_anterior.remove();

        main_content.appendChild(contenedor);
        contenedor.className = 'contenedor-tareas';

        let contenedor_nuevo = document.querySelector('.contenedor-tareas')
        contenedor_nuevo.dataset.id = id;
        
        console.log( contenedor.dataset.id);

    }

}