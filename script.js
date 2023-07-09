////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

const calcularAniosPerro = ( name, year) => {
    /*
      Además de comprobar los tipos, me cercioro de que 'name' no pueda ser un string vacío. Guardo la assertion de que ambos valores son falsy y la de tipos en constantes, para que me quede más legible en el if
    */
  const VALUES_ARE_FALSY = !name || !year;
  const VALUES_ARE_NOT_THE_RIGHT_TYPE = typeof name !== 'string' || typeof year !== 'number';
    
  
    if(VALUES_ARE_FALSY || VALUES_ARE_NOT_THE_RIGHT_TYPE ){
      return console.error('Los datos ingresados no son válidos. Por favor, ingresa un nombre y año válidos')
    }else{
        //si obtenemos el año a partir del método getFullyear de la clase global Date (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date) el programa seguirá funcionand cuando ya no sea 2023. El año actual pasa  a ser deducido programáticamente en vez de estar 'hardcodeado', o sea, literamente escrito en el código
    const current = new Date().getFullYear()
    const age = current - year;
    const dogAge = age*7;

    
     console.log(`${name} tiene ${ age } años en años de humano, y ${ dogAge } años en años de perro`);
    }
 
      
}

calcularAniosPerro("", 2002);
