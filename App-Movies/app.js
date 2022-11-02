const peliculas = require("./movies");

//console.log(peliculas[3]);

let moviesDH = {
  listMovie: (pelis) => {
    return pelis.map((element) => element);
  },

  searMovie: (id) => {
    const filtradoDeTitulo = peliculas.filter((element) => element.id === id);
    if (filtradoDeTitulo.length == 0) {
      console.log("----------> No Se encontro la pelicula <-------------");
      return null;
    } else {
      console.log("-----------> BUSQUEDA CORRECTA <---------");
      return filtradoDeTitulo;
    }
  },

  searchMoviesByGenr: (pelis) => {
    const movie = peliculas.filter((element) => element.genero === pelis);

    if (movie.length > 0) {
      return movie;
    } else {
      return null;
    }
  },

  totalPrice: (listado) => {
    return peliculas.reduce((sumador, elemento) => sumador + elemento.price, 0);
  },
};

console.log(moviesDH.listMovie(peliculas));
//console.log(moviesDH.searMovie(5));
//console.log(moviesDH.searchMoviesByGenr("Aventura"));
//console.log(moviesDH.totalPrice(peliculas));
