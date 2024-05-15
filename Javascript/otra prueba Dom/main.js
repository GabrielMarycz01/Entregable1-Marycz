//formularios 
const formulario = document.getElementById("formulario");

//base de datos
const dineroTotal = [];


// controlar envio de formulario
formulario.addEventListener("submit", (event) => {
  event.preventDefault();

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const dinero = document.getElementById("dinero");
const añosAbonar = document.getElementById("añosAbonar");

const multiplicacion = {
dinero: dinero.value,
añosAbonar: añosAbonar.value,
};

dinero.push(dinero);

});

//multiplicar 
function multiplicador(dinero) {
    const div = document.createElement("div");

    div.innerHTML = `
    <h3>${dinero.dinero}</h3>;
    <p>${añosAbonar.dinero};</p>
    `;
}