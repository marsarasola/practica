//escribi una función returnLongest() que tome como parametros dos string
//y retorne el string más largo
//si ambas string son igualmente largas, devuelve un mensaje 'They're the same'
//si una de las string no es válida. devuelve un mensaje 'One of the values is not a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'

function returnLongest(cadena1, cadena2) {
  
  //con este método voy a recuperar el valor del parámetro que pase
  const getType = (value) => (typeof value !== "string");

  //realizo un switch que se corta cuando la expresión del caso
  //devuelve true, es más legible y más mantenible que un if else con muchos else if
  switch (true) {
    case getType(cadena1) && getType(cadena2):
      console.log("None of the values is a string");
      break;
    case getType(cadena1) || getType(cadena2):
      console.log("One of the values is not a string");
      break;
    case cadena1.length === cadena2.length:
      console.log("They're the same");
      break;
    case cadena1.length > cadena2.length:
      console.log("The first one is longer than the second one!");
      break;
    default:
      console.log("The second one is longer than the first one!");
  }
}



returnLongest('8', '84')