///escribir una función getSquare()
//que guarde en una variable el cuadrado de un número que reciba 
//por parametro

//En este caso la función estaba bien, no tiene mucho sentido
//guardar en una variable el exponente, porque la función 
//busca siempre el cuadrado, así que podríamos 
//usar directamente el mismo paramétro.
//como no realizamos validaciones de tipo,
//podemos usar esta sintaxis de funcion flehca
//con return ímplicito para dejarlo en una línea.

const getSquare = num => num * num

const squareOfSix = getSquare(6)


