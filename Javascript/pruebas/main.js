//obtener formulario

const formulario = document.getElementById("formulario");
const tareasContainer = document.getElementById("tareas");

//"base de datos"

const tareas = [];

//controlar envio de formulario

formulario.addEventListener("submit", (event) => {
    //se evita que se recargue la pagina
    event.preventDefault();

    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");

    const tarea = {
        titulo: titulo.value,
        descripcion: descripcion.value,
    };

      tareas.push(tarea);

    const tareaElement = generarTarea(tarea);

    tareasContainer.appendChild(tareaElement);

    //limpiar formulario 
    formulario.reset();

} );


//generador de tareas

function generarTarea(tarea){
    const div = document.createElement("div");

    div.innerHTML = `
    <h3>${tarea.titulo}</h3>
    <p>${tarea.descripcion}</p>
    `;

    div.className = "card";

    return div;
}