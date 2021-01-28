let nombre = prompt("Hola, ¿Cómo te llamas?");

let respuesta = confirm(
  "Apretando \"Aceptar\" confirmas que has sido vacunado. De lo contrario, debes darle a \"Cancelar\"."
);

let consola;

if (respuesta == true) {
  consola = `Genial, ${nombre}, puede pasar sin problema.`;
} else {
  consola = `Disculpa, ${nombre}, pero no puede pasar.`;
}

console.log(consola);
