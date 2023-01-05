export function añadirProyecto() {

    let proyectos = JSON.parse(localStorage.getItem('proyectos'));
    if(proyectos == null) proyectos = [];
    
    const form_proyecto = document.querySelector('.form-proyecto');
    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');
    const proyecto = document.createElement('li');

    proyecto.dataset.id = `${ultimoElem}`;
    proyecto.className = 'proyecto';

    proyecto.textContent = form_proyecto.elements[0].value;
    proyectos.push(proyecto.textContent);

    proyectosUl.appendChild(proyecto);

    localStorage.setItem('proyectos', JSON.stringify(proyectos));
    console.log(proyectos);

};

export function añadirTareas(evento) {

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

    }

};

export function poblarUl() {

    let proyectos = JSON.parse(localStorage.getItem('proyectos'));
    if(proyectos == null) proyectos = [];
    const div = document.querySelector('ul')
    
    let index = 0;
    proyectos.forEach(proyecto => {

        let li = document.createElement('li')
        div.appendChild(li);
        li.textContent = proyecto;
        li.dataset.id = index;
        li.className = 'proyecto';
        index++

    });
    

}