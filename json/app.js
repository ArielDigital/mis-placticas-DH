let amigos =["coco","pablito", "franco"] // esto es una array

console.log(amigos)

let amigosJson = JSON.stringify(amigos)

console.log(amigosJson)

let amigosOriginal = JSON.parse(amigosJson)

console.log(amigosOriginal)


let ariel = require('./objeto.js') // probe objeto con metodos

console.log(ariel.miObjeto.sumar(9,9))

let persona ={
    nombre: 'Carlos',
    edad:32 ,
    domicilio: 'calle sin numero '
    }

    let personaJson = JSON.stringify(persona);

    console.log(personaJson);



