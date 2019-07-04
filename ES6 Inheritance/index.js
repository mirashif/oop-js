class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('Move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    /* MUST Call parent constructor first
      by using super(); before using
       derived constructor */
    this.radius = radius;
  }

  draw() {
    console.log('Draw');
  }
}

const c = new Circle('Red', 6);
console.log(c);
