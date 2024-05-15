

alert("Bienvenido/a a Prestamos.INC");

let nombreYapellido = prompt("ingrese su nombre y apellido");

const edad = Number(prompt("ingrese su edad"));

if (edad >= 18){
    alert("Bienvenido/a " + nombreYapellido)
}else{
    alert("Tendras que pedir ayuda a un mayor para continuar")
}

const dinero = Number(prompt("Ingrese la cantidad de dinero a solicitar, teniendo en cuenta que tiene un incremento del 45%"));

const cuotas = Number(prompt("¿En cuantas cuotas desea abonar?"));

//la cantidad de porcentaje que se le va a aplicar
let porcentaje = 45

//para poder sacar el 1% del total
let unPorciento = 100

//poder sacar el 1%
let porcentaje1 = dinero / unPorciento;

// el 1% multiplicado el porcentaje que se le va a agregar
let porcentaje2 = porcentaje1 * porcentaje;

// el porcentaje + el total del dinero para saber cuanto es el total
let totalDinero = porcentaje2 + dinero;

// el total total del diero dividido la cantidad de cuotas a abonar
const dineroCuota = totalDinero / cuotas;


alert(nombreYapellido + " usted debera abonar " + cuotas + " cuotas de $" + dineroCuota + " de un total de $" + totalDinero);


const money = [dinero, cuotas, porcentaje, porcentaje1, porcentaje2,]

console.log(money);
