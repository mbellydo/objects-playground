/**
 * Buscando a Nemo
 */

let pez1 = {
    nombre: "Dory",
    color: 'azul'

}

let pez2 = {
    nombre: "Nemo",
    color: 'naranja'
}

let pez3 = {
    nombre: "Sipho",
    color: 'negro'
}

/**
 * Disponemos de un array de 3 objetos. Concretamente, son 3 peces.
 * Queremos implementar una función que nos diga si cierto pez está en el array.
 * 
 * 1. ¿Cómo debemos actualizar la variable pezEncontrado a cada iteración del bucle?
 * 2. ¿Cómo debemos actualizar la variale 'indicePez' a cada iteración del bucle?
 * 
 * Ayudate de chivatos y del depurador de visual Studio para ver que sucede dentro del bucle a cada iteración
 */

let banco_peces = [pez1, pez2, pez3]

function buscarPez(banco_peces, pezBuscado) {
    let pezEncontrado = false // Hemos encontrado ya el pez?
    let indicePez = 0 // Primera posición del array

    // !pezEncontrado -> mientras NO hayamos encontrado al pez buscado,
    // debemos seguir comprobado el array

    //indicePez<=banco_peces_dentro_function.length -> Mientras el índice
    // sea menor estricto al número de elementos del vector, significa
    // que todavía no lo hemos recorrido por completo

    while(!pezEncontrado && indicePez<=banco_peces.length){
        pezEncontrado = (banco_peces[indicePez].nombre == pezBuscado )
        indicePez++ // nos permite avanzar en el array; poder comprobar todas las posiciones
    }

    return pezEncontrado;
}

// Esta llamada debería devolver 'true'
// console.log("Buscar a Dory:", buscarPez(banco_peces, "Dory"))

// Esta llamada debería devolver 'true'
// buscarPez(banco_peces, "Nemo")

// // Esta llamada debería devolver 'false'
console.log("Buscar a Tenacitas:", buscarPez(banco_peces, "Tenacitas"))