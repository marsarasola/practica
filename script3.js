//escribi una función returnLongest() que tome como parametros dos string
//y retorne el string más largo
//si ambas string son igualmente largas, devuelve un mensaje 'They're the same'
//si una de las string no es válida. devuelve un mensaje 'One of the values is not a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'
//si ambos valores son inválidos, devuelve 'None of the values is a string'

function returnLongest(cadena1, cadena2) {
    if (typeof(cadena1) !== "string" && typeof(cadena2) !== "string") {
      console.log("None of the values is a string");
    } else if (typeof(cadena1) !== "string" || typeof(cadena2) !== "string") {
      console.log("One of the values is not a string");
    } else if (cadena1.length === cadena2.length) {
      console.log("They're the same");
    } else if (cadena1.length > cadena2.length) {
      console.log("The first one is longer than the second one!");
    } else {
      console.log("The second one is longer than the first one!");
    }
  }

returnLongest("Martina", "Martina");