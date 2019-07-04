// Factory fn -> regular fn
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}
const circle = createCircle(1);


// Constructor fn -> this + new operator
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  };
}
Circle.call({}, (1, 2, 3)); // {} -> this (default)
Circle.apply({}, [1, 2, 3])
const anotherCircle = new Circle(1);

