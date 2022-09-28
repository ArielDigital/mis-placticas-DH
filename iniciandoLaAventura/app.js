/*const text = require('fs')
const { dirname } = require('path')

console.log(__dirname)

//LEE EL ARCHIVO Y LO ASIGNA EN LA VARIABLE datos 
let datos = text.readFileSync(__dirname + '/texto.txt', 'utf-8')

//IMPRIME EN CONSOLA EL ARCHIVO texto.txt desde la funcion .readFileSync
// la funcion .readFileSync del MODULO 'fs' lee Archivos de texto
console.log(text.readFileSync(__dirname + '/texto.txt', 'utf-8'))

EJEMPLO DEL VIDEO EL CODIGO DE ARRIBA  */

let pao = require('./Paola_Gomez');
let ari = require('./Ariel_Mosquera');

const mitexto = require('fs'); 

   console.log ('Hola, soy ' + pao.Nombre_completo  +' disfruto ' +  pao.Pasatiempo   + ' y soy de '+ pao.Lugar_de_residencia );

   console.log ('Hola, soy ' + ari.Nombre_completo  +' disfruto ' +  ari.Pasatiempo   + ' y soy de '+ ari.Lugar_de_residencia );

const text = mitexto.readFileSync(__dirname + '/mensaje.txt' ,'utf-8');

console.log(text)