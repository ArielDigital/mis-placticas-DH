const autos = require("./autos");

let concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    let autoFiltrado = this.autos.find(function (auto) {
      return auto.patente === patente;
    });

    return autoFiltrado !== undefined ? autoFiltrado : null;
  },

  venderAuto: function (patente) {
    let autoBuscado = this.buscarAuto(patente);
    autoBuscado.vendido = true;
  },

  autosParaLaVenta: function () {
    return this.autos.filter((element) => element.vendido === false);
  },

  autosNuevos: function () {
    let paraLaVenta = this.autosParaLaVenta();
    return paraLaVenta.filter((element) => element.km < 100);
  },

  listaDeVentas: function () {
    let busqueda = this.autos.filter((element) => element.vendido === true);
    return busqueda.foreach((element) => console.log(element.precio));
  },

  totalDeVentas: function () {
    let ventas = this.autos.filter((element) => element.vendido === true);
    return ventas.reduce((total, element) => total + element.precio, 0);
  },

  puedeComprar: function (auto, persona) {
    let precioDeCuota = auto.precio / auto.cuotas;

    return (
      precioDeCuota <= persona.capacidadDePagoEnCuotas &&
      auto.precio <= persona.capacidadDePagoTota
    );
  },

  autosQuePuedeComprar: function (persona) {
    const autosVenta = this.autosParaLaVenta();

    return autosVenta.filter((element) => puedeComprar(element, persona));
  },
};
