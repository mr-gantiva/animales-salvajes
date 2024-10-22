// Creación clase Animal
export class Animal {
  constructor(nombre, edad, img, comentario, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentario = comentario;
    this._sonido = sonido;
  }
  get Nombre() {
    return this._nombre;
  }
  set Nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
  get Edad() {
    return this._edad;
  }
  set Edad(nuevaEdad) {
    this._edad = nuevaEdad;
  }
  get Img() {
    return this._img;
  }
  set Img(nuevaImg) {
    this._img = nuevaImg;
  }
  get Comentario() {
    return this._comentario;
  }
  set Comentario(nuevosComentario) {
    this._comentario = nuevosComentario;
  }
  get Sonido() {
    return this._sonido;
  }

  set Sonido(nuevoSonido) {
    this._sonido = nuevoSonido;
  }

  emitirSonido() {
    console.log(this._sonido);
  }
}
