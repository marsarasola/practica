//escribí una función countVowels() que reciba un string
//y devuelva ( decidí vos como mostrar el resultado )
//la cantidad de vocales en la palabra

  //Tu solución también funcionaría con el méoto charAt usando el iterador i,
  //sin el segundo for 

function countVowels(cadena) {
  let count = 0;
  //muy bien el array de vocales !!!!
  let vocales = ["a", "e", "i", "o", "u"];
  //Creo un array a partir de la cadena con Array.from() (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from),
  //inmediatamente accedo al méotodo forEach, que hace un loop
  //sobre todos los elementos aplicando una función sobre cada uno.
  //La función callback toma como parametro primero el valor en ese índica y después el índica. En este caso solo necesitamos el índice, para hacer uso del método includes() del array vocales + el méotod charAt del string. Este método devuelve 'true' o 'false, así que si es true aumentamos por uno count, si no, no hacemos nada ( devolvemos null ). 
  Array.from(cadena).forEach( (letter, index) => {
    vocales.includes(cadena.charAt(index)) ? count ++ : null
  })
  return count;
}


console.log(countVowels("Martina Sarasola"));
