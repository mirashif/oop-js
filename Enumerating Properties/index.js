function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(draw);
  };
}
const circle = new Circle(10);

for (const key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}
// Object has a method .keys that returns all keys
const keys = Object.keys(circle);
console.log(keys);

// Checking if circle (object) has radius (key)
if ('radius' in circle) {
  console.log('Circle has a radius.');
}
