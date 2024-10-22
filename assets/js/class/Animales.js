import { Animal } from "./Animal.js";

export class Leon extends Animal {
  constructor(nombre, edad, comentario, sonido, img) {
    super(nombre, edad, comentario, sonido, img);
  }
  Rugir(nuevo_sonido) {
    this._sonido = nuevo_sonido;
    return this._sonido;
  }
}

export class Lobo extends Animal {
  constructor(nombre, edad, comentario, sonido, img) {
    super(nombre, edad, comentario, sonido, img);
  }
  Aullar(nuevo_sonido) {
    this._sonido = nuevo_sonido;
    return this._sonido;
  }
}

export class Oso extends Animal {
  constructor(nombre, edad, comentario, sonido, img) {
    super(nombre, edad, comentario, sonido, img);
  }
  Grunir(nuevo_sonido) {
    this._sonido = nuevo_sonido;
    return this._sonido;
  }
}

export class Serpiente extends Animal {
  constructor(nombre, edad, comentario, sonido, img) {
    super(nombre, edad, comentario, sonido, img);
  }
  Sisear(nuevo_sonido) {
    this._sonido = nuevo_sonido;
    return this._sonido;
  }
}

export class Aguila extends Animal {
  constructor(nombre, edad, comentario, sonido, img) {
    super(nombre, edad, comentario, sonido, img);
  }
  Chillar(nuevo_sonido) {
    this._sonido = nuevo_sonido;
    return this._sonido;
  }
}
