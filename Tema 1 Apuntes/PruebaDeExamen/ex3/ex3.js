/*
Crea una función a la que se le pasen dos  textos (sólo letras y espacios) y detecte si los mismos son anagramas o no. 
Un anagrama es una palabra que resulta de trasponer las letras de otra palabra. Por ejemplo: ESTANCO y ACENTOS son anagramas.
La función debe devolver verdadero si ambas palabras son anagramas.

Para realizar este ejercicio, será necesario escoger una estructura de datos y utilizar tanto los bucles como las funciones propias de dicha estructura de datos dadas en clase.

*/

function sonAnagramas(texto1, texto2) {

    let resultado = false;

    texto1 = texto1.split('').sort().join('');
    texto2 = texto2.split('').sort().join('');

    if(texto1 === texto2){
        return true
    }
    
    return resultado;
}


console.log(sonAnagramas("ESTANCO", "ACENTOS"));
console.log(sonAnagramas("CASA", "SACA"));
console.log(sonAnagramas("HOLA", "ADIOS"));
