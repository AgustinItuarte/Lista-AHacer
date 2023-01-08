export function añadirProyecto() {

    let proyectos = JSON.parse(localStorage.getItem('proyectos'));
    if(proyectos == null) proyectos = [];
    
    const form_proyecto = document.querySelector('.form-proyecto');
    let ultimoElem = proyectos.length - 1;
    const proyectosUl = document.querySelector('ul');
    const proyecto = document.createElement('li');

    proyecto.dataset.id = `${ultimoElem + 1}`;
    proyecto.className = 'proyecto';

    proyecto.textContent = form_proyecto.elements[0].value;
    proyectos.push(proyecto.textContent);

    proyectosUl.appendChild(proyecto);

    localStorage.setItem('proyectos', JSON.stringify(proyectos));

};

export function añadirProyectoEntorno(evento) {

    const elemento = evento.target
    if (elemento.classList.contains('proyecto')) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const main_content = document.querySelector('#contenido');
        const contenedor = document.createElement('div');
        const nom_proyecto = document.createElement('h2');
        const btn_añadir_tarea = document.createElement('button');
        const id = elemento.dataset.id;
        const form = document.createElement('form');
        const label_titulo = document.createElement('label');
        const input_titulo = document.createElement('input');
        const btn_aceptar = document.createElement('button');
        const btn_cancelar = document.createElement('button');
        const botones = document.createElement('div');



        contenedor_anterior.remove();

        nom_proyecto.innerHTML = elemento.textContent;
        btn_añadir_tarea.innerHTML = '+ Añadir Tarea';
        label_titulo.textContent = 'Titulo:';
        btn_aceptar.textContent = 'Aceptar';
        btn_cancelar.textContent = 'Cancelar';

        main_content.appendChild(contenedor);
        contenedor.appendChild(nom_proyecto);
        contenedor.appendChild(btn_añadir_tarea);
        contenedor.appendChild(form);
        form.appendChild(label_titulo);
        form.appendChild(input_titulo);
        form.appendChild(botones);
        botones.appendChild(btn_aceptar);
        botones.appendChild(btn_cancelar);
        contenedor.className = 'contenedor-tareas';
        btn_añadir_tarea.className = 'btn-añadir-tarea';
        form.className = 'form-añadir-tarea';
        input_titulo.id = 'titulo-tarea';
        label_titulo.htmlFor = input_titulo.id;
                
        let contenedor_nuevo = document.querySelector('.contenedor-tareas')
        contenedor_nuevo.dataset.id = id;
        nom_proyecto.dataset.id = id;
        btn_añadir_tarea.dataset.id = id;

    } else if (elemento.classList.contains('btn-añadir-tarea')) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const main_content = document.querySelector('#contenido');
        const contenedor = document.createElement('div');
        const nom_proyecto = document.querySelector('h2');
        const btn_añadir_tarea = document.createElement('button');
        const id = elemento.dataset.id;

        contenedor_anterior.remove();

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