let proyectos = [];

export function añadirProyecto() {
    /* input_nom = document.querySelector('#nom_proyecto'); */
    const form_proyecto = document.querySelector('.form-proyecto');
    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');
    const proyecto = document.createElement('li');

    proyectos.push(proyecto);
    proyecto.dataset.id = `${ultimoElem}`;
    proyecto.className = 'proyecto';

    proyecto.textContent = form_proyecto.elements[0].value;

    proyectosUl.appendChild(proyecto);

}

export function mostrarBoton() {

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