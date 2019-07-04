/* Abstraction Principal:
"Hide the details,
Show the essentials" */

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function() {
    // ...
  };
  /* Scope is temp
Closure is perm */
  this.draw = function() {
    computeOptimumLocation();
    // defaultLocation
    // this.radius

    console.log('draw');
  };
}
const circle = new Circle(10);
// circle.
circle.draw();
