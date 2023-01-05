let proyectos = [];

export function añadirProyecto(nombre) {

    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');
    /* const contenedor = document.querySelector('#contenido') */
    const proyecto = document.createElement('li');
    /* const contenidoProyecto = document.createElement('div') */

    proyectos.push(proyecto);
    proyecto.dataset.id = `${ultimoElem}`;
    /* contenidoProyecto.dataset.id = `${ultimoElem}`;
    contenidoProyecto.className = 'main-content'; */

    proyecto.textContent = nombre;

    /* contenedor.appendChild(contenidoProyecto); */
    proyectosUl.appendChild(proyecto);

}

export function añadirTareas(){
    console.log(proyectos)
}