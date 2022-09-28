let archivoTareas = require("./funcionesDeTareas");
let tareas = archivoTareas.leerArchivo();
let accion = process.argv[2];

switch (accion) {
  case "listar": {
    for (let i = 0; i < tareas.length; i++) {
      console.log(
        "Tarea: " + tareas[i].titulo + ", Estado: " + tareas[i].estado
      );
    }
    break;
  }

  case undefined: {
    console.log("--> Atencion tienes que pasar una accion!!!");
    break;
  }

  default: {
    console.log("--> No entiendo que quieres hacer!!!");
  }
}
