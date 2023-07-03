//escribí una función countVowels() que reciba un string
//y devuelva ( decidí vos como mostrar el resultado )
//la cantidad de vocales en la palabra

function countVowels(cadena) {
  let count = 0;
  let vocales = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < cadena.length; i++) {
    for (let j = 0; j < cadena.length; j++) {
      if (cadena.charAt(i) === vocales[j]) {
        count++;
      }
    }
  }

  return count;
}


console.log(countVowels("Martina Sarasola"));
