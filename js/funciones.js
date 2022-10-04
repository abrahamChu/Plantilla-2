let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;
/*let lista = document.getElementById("operacion")*/ //Obtengo el id operacion del html y lo introduzco en la variable lista

/*Cuando tu en la lista haces un cambio de valor, en este caso ir cambiando entre las distintas opciones de tipos de datos la funcion calcula() nos manda un mensaje con el cambio*/

//Opcion mas larga
/*let lista = document.getElementById("operacion")
operacion.addEventListener("change", calcular, false);
function calcular(event){
    operacionI = event.target.value;
    alert(operacionI)
}*/

//Opcion simplificada.
/*operacion.addEventListener("change", calcular, false);
function calcular(){
    operacionI = operacion.value;
    alert(operacionI)
}*/

operacion.addEventListener("change", calcular, false);
function calcular() {
  operacionI = operacion.value;
  if (operacionI == 1) {
    numeroI = parseInt(dato.value); //numeroI es el numero que queremos convertir
    let binario = numeroI.toString(2);
    resultado.value = binario;
  } else if (operacionI == 2) {
    numeroI = parseInt(dato.value);
    let octal = numeroI.toString(8);
    resultado.value = octal;
  } else if (operacionI == 3) {
    numeroI = parseInt(dato.value);
    let hexadecimal = numeroI.toString(16);
    resultado.value = hexadecimal;
  } else if (operacionI == 4) {
    let decimal = numeroI.parseInt(dato.value, 2);
    resultado.value = decimal;
  } else if (operacionI == 5) {
    let decimal = numeroI.parseInt(dato.value, 8);
    resultado.value = decimal;
  }
}
