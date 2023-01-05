let proyectos = [];

export default function añadirProyecto(nombre) {

    let ultimoElem = proyectos.length - 1
    const proyectosUl = document.querySelector('ul');
    const proyecto = document.createElement('li');

    proyectos.push(proyecto);
    proyecto.dataset.id = `${ultimoElem}`;

    proyecto.textContent = nombre;
    proyectosUl.appendChild(proyecto);
    
}