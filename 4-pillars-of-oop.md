## 4 pillars of OOP
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism 


## Benefits of OOP
- Encapsulation: 
  Reduce complexity + Increase reusability 

- Abstraction: 
  Reduce complexity + Isolate impact of changes 

- Inheritance: 
  Eliminate redundant code 

- Polymorphism: 
Refactor ugly switch/case statements 


### Encapsulation 
In OOP we ***group related variables & functions*** that operate on them, into object. This is called *Encapsulation*.

```javascript
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
employee.getWage();
```

> "The best functions are those with no parameters!" - Uncle Bob (Robert C Martin)

### Abstraction
We hide some properties or methods from the outside. 
- We can make those interfaces of object simpler. 
- And we can reduces impact of changes. 

### Inheritance
It's a mechanism that allows to elliminate redundant code.  
i.e. Making a singular way (Object) for multiple similar components. 

### Poly morphism (Many Form)
It's a technique that allows to get rid of long ethanals or, switch/case statements. 
