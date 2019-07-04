// Getters & Setters in ES6 classes
const _radius = new WeakMap();

class Cicle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) throw new Error('Invalid Radius');
    _radius.set(this, value);
  }
}

const c = new Cicle(1);
c.radius; // Now we can read it
