// ==== Paso 1: Traductor de emociones ====

console.log("=== Traductor de emociones a canciones ===");

let emocion = prompt("¿Cómo te sientes hoy en una palabra? (ej: feliz, cansado, nervioso)");
alert("Para sentirte " + emocion + ", te recomendamos escuchar algo de música relajante");
console.log("Emoción ingresada por el usuario:", emocion);


// ==== Paso 2: Operaciones matemáticas con condicionales ====

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));

let operacion = prompt("¿Qué operación quieres hacer? (suma, resta, multiplicacion, division)");

let resultado;

if (operacion === "suma") {
  resultado = numero1 + numero2;
} else if (operacion === "resta") {
  resultado = numero1 - numero2;
} else if (operacion === "multiplicacion") {
  resultado = numero1 * numero2;
} else if (operacion === "division") {
  if (numero2 === 0) {
    alert("Error: no se puede dividir entre cero");
  } else {
    resultado = numero1 / numero2;
  }
} else {
  alert("Operación no válida. Escribe: suma, resta, multiplicacion o division");
}

console.log("Resultado:", resultado);
alert("El resultado es: " + resultado);


// ==== Paso 3: Arreglos y ciclos ====

// Arreglo con una lista de tareas
let tareas = ["Estudiar JavaScript", "Lavar la ropa", "Comprar comida", "Terminar el proyecto"];

// Recorrido con for
console.log("=== Lista de tareas (con for) ===");
for (let i = 0; i < tareas.length; i++) {
  console.log((i + 1) + ". " + tareas[i]);
}

// Recorrido con while
console.log("=== Lista de tareas (con while) ===");
let indice = 0;
while (indice < tareas.length) {
  console.log((indice + 1) + ". " + tareas[indice]);
  indice++;
}

// Función que filtra tareas según una palabra clave
function filtrarTareas(arreglo, palabraClave) {
  return arreglo.filter(function (tarea) {
    return tarea.toLowerCase().includes(palabraClave.toLowerCase());
  });
}

let resultadoBusqueda = filtrarTareas(tareas, "proyecto");
console.log("Tareas que contienen 'proyecto':", resultadoBusqueda);


// ==== Paso 4: Funciones en JavaScript ====

// Una función por cada operación matemática
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    alert("Error: no se puede dividir entre cero");
    return null;
  }
  return a / b;
}

// Función que llama a otras funciones según la operación elegida
function calcular(a, b, tipoOperacion) {
  if (tipoOperacion === "suma") {
    return sumar(a, b);
  } else if (tipoOperacion === "resta") {
    return restar(a, b);
  } else if (tipoOperacion === "multiplicacion") {
    return multiplicar(a, b);
  } else if (tipoOperacion === "division") {
    return dividir(a, b);
  } else {
    alert("Operación no válida");
    return null;
  }
}

// Probamos la función calcular, que a su vez llama a las demás
let numeroA = Number(prompt("Paso 4 - Ingresa el primer número:"));
let numeroB = Number(prompt("Paso 4 - Ingresa el segundo número:"));
let tipoOp = prompt("Paso 4 - ¿Qué operación? (suma, resta, multiplicacion, division)");

let resultadoFuncion = calcular(numeroA, numeroB, tipoOp);

if (resultadoFuncion !== null) {
  console.log("Resultado usando funciones:", resultadoFuncion);
  alert("Resultado (con funciones): " + resultadoFuncion);
}


// ==== Paso 5: Objetos en JavaScript ====

// Un arreglo de objetos, cada uno representa una operación resuelta
let operaciones = [
  { num1: 8, num2: 2, tipo: "suma", mostrar: function () { console.log(this.num1 + " " + this.tipo + " " + this.num2); } },
  { num1: 10, num2: 4, tipo: "resta", mostrar: function () { console.log(this.num1 + " " + this.tipo + " " + this.num2); } },
  { num1: 6, num2: 3, tipo: "multiplicacion", mostrar: function () { console.log(this.num1 + " " + this.tipo + " " + this.num2); } },
  { num1: 20, num2: 5, tipo: "division", mostrar: function () { console.log(this.num1 + " " + this.tipo + " " + this.num2); } }
];

// Recorremos el arreglo con forEach: llamamos al método mostrar() de cada objeto
// y usamos calcular() (del Paso 4) para resolver la operación
console.log("=== Resolviendo operaciones guardadas ===");
operaciones.forEach(function (operacion) {
  operacion.mostrar();
  let resultado = calcular(operacion.num1, operacion.num2, operacion.tipo);
  console.log("Resultado:", resultado);
});

// Usamos map() para crear un nuevo arreglo con los resultados
let resultadosFinales = operaciones.map(function (operacion) {
  return calcular(operacion.num1, operacion.num2, operacion.tipo);
});

console.log("Resultados de todas las operaciones:", resultadosFinales);