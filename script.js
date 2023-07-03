////escribí una función calcularAñosPerro()
///que tome dos parametros (nombre y añoDeNacimiento)
///y muestre por consola un mensaje 'nombre tiene X años en años de humano, y X años en años de perro'
//se dice que un año humano equivale a 7 años de perro
//si los parámetros no son correctos, la función debe cortar
//su ejecución y devolver un mensaje de error

function calcularAñosPerro(name, anioDeNacimiento){
    const anioActual = 2023;
    const edad = anioActual - anioDeNacimiento;
    const edadPerro = edad*7;

    if(typeof(name) === "string" && typeof(anioDeNacimiento) === "number"){
        console.log(`${name} tiene ${edad} años en años de humano, y ${edadPerro} años en años de perro`);
    }else{
        console.log("Error.");
    }
}

calcularAñosPerro("Martina", 2002);

