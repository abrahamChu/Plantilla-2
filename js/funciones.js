let numeroI = 0;
let resultadoI = 0;
let operacionI = 0;

operacion.addEventListener("change", calcular, false);
function calcular() {
  operacionI = operacion.value;
  if (operacionI == 1) {
    numeroI = parseInt(dato.value); //numeroI es el numero que queremos convertir
    let binario = numeroI.toString(2);//Convierte el numero en un String con base 2, binario
    resultado.value = binario;//Saca como resultado la variable binario que es donde hemos guardado la resultado de la operacion.
  } else if (operacionI == 2) {
    numeroI = parseInt(dato.value);
    let octal = numeroI.toString(8);//Convierte el numero en un String con base 8, octal
    resultado.value = octal;
  } else if (operacionI == 3) {
    numeroI = parseInt(dato.value);
    let hexadecimal = numeroI.toString(16);//Convierte el numero en un String con base 16, hexadecimal
    resultado.value = hexadecimal;

  /*Funcion de pasar de numero Binario a decimal*/
  } else if (operacionI == 4) {
    numeroI = numeroI.toString(10);
    for (var i = 0; i < numeroI.length; i++) {//Recorre el numero que hemos ingresado.
      let character = numeroI.charAt(i);
      if (character != 0 && character != 1) {//De cada uno de los caracteres del numero, comprobamos si estos son 0 o 1 y sino lo son el resultado es null.
        resultado.value = null;
      }
    }
    numeroI = parseInt(dato.value, 2);//Convierte binario en numero decimal.
    resultado.value = numeroI;

  /*Funcion de pasar de numero Octal a decimal */
  } else if (operacionI == 5) {
    numeroI = numeroI.toString(10);
    numeroI = parseInt(dato.value, 8);//Convierte octal en numero decimal.
    resultado.value = numeroI;

  /*Funcion de pasar de numero Hexadecimal a decimal*/
  } else {
    numeroI = numeroI.toString(10);
    numeroI = parseInt(dato.value, 16);//Convierte hexadecimal en numero decimal.
    resultado.value = numeroI;
  }
}