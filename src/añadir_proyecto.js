import { generarFormEditar } from "./tareas.js";

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
    if (elemento.classList.contains('proyecto') || elemento.classList.contains('btn-aceptar') || elemento.classList.contains('borrar-tarea') || elemento.classList.contains('total-tareas') || elemento.classList.contains('btn-cancelar-editar') || elemento.classList.contains('btn-aceptar-editar') ) {

        const contenedor_anterior = document.querySelector('.contenedor-tareas');
        const main_content = document.querySelector('#contenido');
        const contenedor = document.createElement('div');

        if (elemento.classList.contains('btn-aceptar') || elemento.classList.contains('btn-cancelar-editar') || elemento.classList.contains('btn-aceptar-editar')) {

            const nom_proyecto = document.querySelector('h2');
            contenedor.appendChild(nom_proyecto);

        } if (elemento.classList.contains('borrar-tarea')) {

            const nom_proyecto = document.querySelector('h2');
            contenedor.appendChild(nom_proyecto);

        }  if (elemento.classList.contains('proyecto')) {

            const nom_proyecto = document.createElement('h2');
            nom_proyecto.innerHTML = elemento.textContent;
            contenedor.appendChild(nom_proyecto);

        } if (elemento.classList.contains('total-tareas')) {

            const nom_proyecto = document.createElement('h2');
            nom_proyecto.innerHTML = 'Tareas';
            contenedor.appendChild(nom_proyecto);
            
        }

        const btn_añadir_tarea = document.createElement('button');
        const id = elemento.dataset.id;
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
        contenedor_anterior.remove();

        btn_añadir_tarea.innerHTML = '+ Añadir Tarea';
        label_titulo.textContent = 'Titulo:';
        label_detalles.textContent = 'Detalles:';
        label_fecha.textContent = 'Fecha:';
        btn_aceptar.textContent = 'Aceptar';
        btn_cancelar.textContent = 'Cancelar';

        main_content.appendChild(contenedor);
        contenedor.appendChild(btn_añadir_tarea);
        contenedor.appendChild(form);
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
        contenedor.className = 'contenedor-tareas';
        btn_añadir_tarea.className = 'btn-añadir-tarea';
        form.className = 'form-añadir-tarea';
        input_titulo.id = 'titulo-tarea';
        label_titulo.htmlFor = input_titulo.id;
        btn_aceptar.className = 'btn-aceptar';
        btn_cancelar.className = 'btn-cancelar';


        let contenedor_nuevo = document.querySelector('.contenedor-tareas')
        contenedor_nuevo.dataset.id = id;
        nom_proyecto.dataset.id = id;
        btn_añadir_tarea.dataset.id = id;
        btn_aceptar.dataset.id = id;
        form.style.display = 'none';
        form.action = 'post'
        input_titulo.name = 'titulo-tarea';
        input_titulo.type = 'text';
        fecha.type = 'date';

        if (elemento.classList.contains('total-tareas')) {

            btn_añadir_tarea.remove();
            contenedor_nuevo.dataset.id = 'tareas'

        }

        if (elemento.classList.contains('borrar-tarea') && contenedor_nuevo.dataset.id === 'tareas') {

            btn_añadir_tarea.remove();
            contenedor_nuevo.dataset.id = 'tareas'

        }

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

export function crearPrioridades(datalist) {

    const prioridades = ['Baja', 'Media', 'Alta'];

    for (let i = 0; i < prioridades.length; i++) {
        
        const opcion = document.createElement('option');
        opcion.value = prioridades[i];
        opcion.text = prioridades[i];
        
        datalist.appendChild(opcion);
    }
    
}