function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.draw = function() {
    console.log('draw');
  };

  /* We only want to read it
  SolN 1: Define a method that returns that variable */
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  /* Better way to define a read only & Object.property 
  SolN 2:
  Object.defineProperty(
    Object we wanna add to, 
    'propertyName',
    { get: function(
      //...
    ) },
    { set: fn() }
    ) 
  */
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid location.');
      }

      defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();
