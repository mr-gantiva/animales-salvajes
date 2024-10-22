export const datosAnimales = (() => {
  let matriz = [];
  async function obtenerDatos(nombre) {
    try {
      let response = await fetch("https://mr-gantiva.github.io/animales.json");
      let data = await response.json();
      console.log(data);
      const datosAnimal = data.animales.find((animal) => nombre == animal.name);
      return datosAnimal;
    } catch (error) {
      console.log(error);
    }
  }
  function llenaMatriz(animal) {
    matriz.push(animal);
  }
  return {
    matriz,
    obtenerDatos,
    llenaMatriz,
  };
})();
//datosAnimales.matriz, datosAnimales.obtenerDatos, datosAnimales.llenaMatriz;
