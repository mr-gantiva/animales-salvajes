import { datosAnimales } from "./modules/iife.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./class/Animales.js";
import { Animal } from "./class/Animal.js";

const animalList = { Leon, Lobo, Oso, Serpiente, Aguila };

function btnClic() {
  document
    .getElementById("btnRegistrar")
    .addEventListener("click", async (event) => {
      event.preventDefault();

      const nombreAnimal = document.getElementById("animal").value;
      const edadAnimal = document.getElementById("edad").value;
      const comentarios = document.getElementById("comentarios").value;

      // console.log(`${nombreAnimal} ${edadAnimal} ${comentarios}`);

      const { imagen, sonido } = await datosAnimales.obtenerDatos(nombreAnimal);
      const imagenActual = `/assets/imgs/${imagen}`;
      const sonidoActual = `/assets/sounds/${sonido}`;

      // Crear una instancia de las clases Animal
      const animal = new animalList[nombreAnimal](
        nombreAnimal,
        edadAnimal,
        imagenActual,
        comentarios,
        sonidoActual
      );

      // Modificar el DOM
      datosAnimales.llenaMatriz(animal);

      cardList(datosAnimales.matriz);
    });
}
btnClic();

function cardList(animalData) {
  console.log(animalData);
  const animalsCards = animalData.map((animal, index) => {
    return `
      <div class="card info__card py-2 px-2 m-2" style="width: 18rem;">
        <img src="${animal._img}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${animal._nombre}</h5>
            <p class="card-text">${animal._comentario}</p>

            <audio controls>
              <source src="${animal._sonido}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
          <button class="btn btnMostrar" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="window.showAnimalDetails(${index})">Ver más</button>
      </div>
    `;
  });
  document.getElementById("Animales").innerHTML = animalsCards.join("");
}

document.getElementById("animal").addEventListener("change", async (event) => {
  const nombreAnimal = event.target.value;

  if (nombreAnimal) {
    // Obtener la imagen del animal seleccionado
    const { imagen } = await datosAnimales.obtenerDatos(nombreAnimal);
    const imagenActual = `/assets/imgs/${imagen}`;

    // Mostrar la imagen
    const previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = `
    <div class="card   py-2 px-2 m-2"">
        <img src="${imagenActual}" class="card-img-top previewImg" alt="${nombreAnimal}">
      </div>
      `;
  }
});

window.showAnimalDetails = function (index) {
  const animal = datosAnimales.matriz[index];

  // Verifica si el animal está definido
  if (!animal) {
    console.error("Animal no encontrado en la matriz.");
    return;
  }

  // Seleccionamos el modal y lo llenamos con los datos del animal
  const modalBody = document.querySelector("#exampleModal .modal-body");
  modalBody.innerHTML = `
    <h5>${animal._nombre}</h5>
    <img src="${animal._img}" class="img-fluid" alt="${animal._nombre}">
    <p class="mt-3">${animal._comentario}</p>
    <audio controls>
      <source src="${animal._sonido}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `;
};
