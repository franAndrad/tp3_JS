// Dificultad:  馃煝馃煛
// 2- Definir una funci贸n que muestre informaci贸n sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la funci贸n determina si esa cadena est谩 formada s贸lo por may煤sculas, s贸lo por min煤sculas o por una mezcla de ambas.

function informacionCadena(cadena){
    if(cadena===cadena.toUpperCase())
        alert("La cadena tiene solo mayusculas");
    else if(cadena===cadena.toLowerCase())
        alert("La cadena tiene solo minusculas");
    else
        alert( "La cadena tiene una mezcla de minusculas y mayusculas");
}

let cadena = prompt("Ingrese una cadena de texto:");

if(cadena!=null){
   informacionCadena(cadena);
}