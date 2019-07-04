// Prototype vs Instance Members

function Circle(radius) {
  // Own properties or, Instance properties (members)
  this.radius;

  this.move = () => {
    this.draw();
    console.log('Movee');
  };
}

// Prototype properties (members)
Circle.prototype.draw = () => {
  console.log('Draww');
};

const c1 = new Circle(2);
const c2 = new Circle(4);

c1.move();
