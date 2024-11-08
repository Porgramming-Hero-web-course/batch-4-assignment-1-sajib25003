
# Necessity of Type Guards

TypeScript is a very popular and powerful tool which enables web developers catch different errors while compiling instead of at runtime. And *type guards* is one of the most useful features of TypeScript which help to ensure type safety specially when a variable's type isn't confirmed. We are going to explore the necessity of Type guards in this blog.

## Type Guards Matter

In JavaScript, we can assign any type of value to any variable. While this flexibility is powerful, it also makes our code error-prone. TypeScript helps us mitigate this by introducing a type system. But TypeScript's type & inference cannot always  determine the type accurately. So, to solve these issues, we use type guards to express the type of a variable more precisely.

## Types of Type Guards

Here are some types of *Type Guards* below-

### 1. `typeof` Type Guard

`typeof` operator is used to check primitive types, like `string`, `number`, or `boolean`.

#### Example
```typescript
function showValue(value: string | number) {
  if (typeof value === "string") {
    console.log("The string is:", value);
  } else {
    console.log("The number is:", value * 2);
  }
}

showValue("hello"); 
showValue(10); 
```


### 2. `instanceof` Type Guard

`instanceof` operator checks if an object is an instance of a specific class. 

#### Example
```typescript
class Dog {
  bark() {
    console.log("Ghew!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog()); 
makeSound(new Cat()); 
```


### 3. `in` Type Guard

`in` checks if a property exists on an object. 

#### Example
```typescript
interface Bird {
  fly(): void;
  wings: number;
}

interface Fish {
  swim(): void;
  fins: number;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```


### 4. Custom Type Guards

Custom type guards are user-defined functions that return a type user wants. This is especially helpful for complex types that cannot be checked with `typeof`, `instanceof`, or `in`.

#### Example
```typescript
interface Car {
  make: string;
  model: string;
  drive(): void;
}

interface Ship {
  length: number;
  sail(): void;
}

function isCar(vehicle: Car | Ship): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function operate(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

## Use Cases for Type Guards

### 1. Handling Mixed Data Types

### 2. Ensuring Type Safety in Unions

### 3. Enhancing Readability and Maintainability


## Summary

Type guards enable safer and reliable code by narrowing down types. With tools like `typeof`, `instanceof`, `in`, and custom type guards, we can manage different type-checking. It helps TypeScript understand our code better and catch errors more accurately.