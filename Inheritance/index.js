/* Inheritance: Classical vs Prototypical
Prototype object is a base of all other object */
let person = { name: 'Mir Ashif' };
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: true,
  configurable: false
});
person.name = 'Nil';
delete person.name;
console.log(Object.keys(person));
