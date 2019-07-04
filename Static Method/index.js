// Math has multiple Static methods.
console.log(Math.random());

class Circle {
  constructor(radius) {
    this.radius;
  }

  // Instance/Own Method
  draw() {
    console.log('Draw!');
  }

  // Static Method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = new Circle(12);
console.log(circle);

const statCircle = Circle.parse('{ "radius": 5 }');
console.log(statCircle);
